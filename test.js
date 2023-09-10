const http = require("http");
const server = http.createServer();
const fs = require("fs");
const qs = require("querystring");

const html = "<div>汉</div>";
console.log(Buffer.byteLength(html));

server.on("request", function (req, res) {
  let body = [];
  req
    .on("data", (chuck) => {
      body.push(chuck);
    })
    .on("end", () => {
      body = Buffer.concat(body).toString();
      console.log(body);
      res.end("结束");
    });
});

server.listen(3000);
