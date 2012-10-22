var http = require('http');
http.createServer(function (req, res) {
  console.log(req +"\n")
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Server is running\n');
}).listen(process.env.VMC_APP_PORT || 1337, null);
console.log("Server is running\n")