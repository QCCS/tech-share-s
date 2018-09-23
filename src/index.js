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
app.use(router.router.routes())
    .use(routerForAllow.allowedMethods());

//服务端口
app.listen(8113);
