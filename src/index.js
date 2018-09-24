import Koa from 'koa';
import Router from 'koa-router';
import logger from 'koa-logger';
import koaStatic from'koa-static';

import router from './route/router';
const routerForAllow = new Router();
const app = new Koa();

app.use(koaStatic('./static'));

console.log('./static')
//日志处理
app.use(logger());

//使用路由中间件
app.use(router.router.routes())
    .use(routerForAllow.allowedMethods());

//服务端口
app.listen(8113);
