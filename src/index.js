import Koa from 'koa';
import Router from 'koa-router';
import router from './route/router';

const routerForAllow = new Router();
const app = new Koa();



// response
// app.use(ctx => {
//     ctx.body = 'Hello Koa';
// });

//使用路由中间件
app.use(router.router.routes());
//可以用链式写法
//当发生请求错的时候，添加友好status响应等
app.use(routerForAllow.allowedMethods());

//服务端口
app.listen(8113);
// Error: listen EADDRINUSE :::8113

// 解决端口占用
// sudo lsof -i:8113
// kill pid

/*
// 原生api测试
import http from 'http';
import testApi from './test-api';
//注意用webpack打包，不然找不到 testApi 模块
const server = http.createServer(testApi);
server.listen(8080);
    */