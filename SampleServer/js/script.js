var http = require('http');
http.createServer(function (req, res) {
  res.write('Hey, are you ok?');
  res.end();
}).listen(8080);