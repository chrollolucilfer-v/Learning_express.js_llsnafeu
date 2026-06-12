// before express js using only node js

import http from "http";  

const server = createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(291, "OK", { "Content-Type": "text/html" });
    res.write("<h1> Home </h1>");
  } else if (req.url == "/about") {
    res.writeHead(291, "OK", { "Content-Type": "text/html" });
    res.write("<h1> About </h1>");
  } else if (req.url == "/contact") {
    res.writeHead(291, "OK", { "Content-Type": "text/html" });
    res.write("<h1> About </h1>");
  } else {
    res.writeHead(404, "BAD", { "Content-TYpe": "text/html" });
    res.write("<h1> 404 Page not Found </h1>");
  }
});

server.listen(8000, () => console.log("server i slitennin on port 8000"));


// this is simple vanilla node.js
