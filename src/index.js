console.log("te st");

// commonjs规范可以
// const http = require('http');
// var server = http.createServer(function (req, res) {
//     res.write("es5");
//     res.end();
// });

// 用标准的 es6 模块系统
import http from 'http';
//需要用模块打包器
import add from './add';

const server = http.createServer((req, res) => {
    console.log(add(11,21));

    res.write("es98");
    res.end();
});

server.listen(8080);
//http://localhost:8080/
