import Koa from 'koa';
import Router from 'koa-router';
import logger from 'koa-logger';
import staticServer from'koa-static';

import router from './route/router';
const routerForAllow = new Router();
const app = new Koa();


//使用babel编译之后，输出的是跟路径，/
console.log(__dirname);
let staticPath = process.cwd()+"/dist/static";
app.use(staticServer(staticPath));

//日志处理
app.use(logger());
// 使用路由中间件
app.use(router.router.routes())
    .use(routerForAllow.allowedMethods());

//服务端口
app.listen(8113);
