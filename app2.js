var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
	
	res.writeHead(200, {'Content-Type': 'text/html'});
	
	fs.readFile('_index.html',function(err,contents){

		res.end(contents);
		console.log("file read");

	});

}).listen(20202);
console.log("server is running...");