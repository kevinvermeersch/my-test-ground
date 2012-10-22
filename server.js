var net = require('net');
var port = 8000;

var server = net.createServer(function(socket){
	
	socket.write("hello\n");
	socket.write("world\n");
	
	socket.on("data",function(d){
		socket.write(">> "+ d);
	})
	
});

server.listen(port);
console.log("server is running on port "+ port)