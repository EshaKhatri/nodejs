var http = require("http");
const { listenerCount } = require("process");
http
  .createServer(function (req, res) {
    res.write("hii");
    res.end();
  })
  .listen(8080);
