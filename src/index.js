import Koa from 'koa';
import Router from 'koa-router';
import router from './route/router';
import logger from 'koa-logger';

const routerForAllow = new Router();
const app = new Koa();

//日志处理
app.use(logger());

//使用路由中间件
app.use(router.router.routes())
    .use(routerForAllow.allowedMethods());

//服务端口
app.listen(8113);
