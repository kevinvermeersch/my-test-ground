var fs = require("fs");
var http = require("http");

http.createServer(function(request,response){

	var file = fs.createWriteStream("test.mp4");
	var totalBytes = request.headers["content-length"];
	var uploadedBytes = 0;
	
	console.log(request.headers);	
	
	request.pipe(file);
	
	request.on("data",function(chunk){		
		uploadedBytes += chunk.length;
		var progress = (uploadedBytes/totalBytes) * 100;
		response.write("progress: " + parseInt(progress,10) + "%\n");
		
	});
	
	request.on("end",function(){	
		response.end("file uploaded\n\n");
	});
	
}).listen(12121);
console.log("server running ...\n");	