var http = require('http');

http.createServer(function (req, res) {
  res.write("Gotta catch em all!");
  res.end();
}).listen(8080);