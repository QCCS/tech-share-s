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
