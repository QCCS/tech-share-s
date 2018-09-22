console.log("test");

// commonjs规范可以
// const http = require('http');
// var server = http.createServer(function (req, res) {
//     res.write("es5");
//     res.end();
// });


// 用标准的 es6 模块系统
import http from "http";

const server = http.createServer((req, res) => {
    res.write("es6");
    res.end();
});

server.listen(8080);
//http://localhost:8080/
