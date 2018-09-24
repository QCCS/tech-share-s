import Koa from 'koa';
import Router from 'koa-router';
import logger from 'koa-logger';
import staticServer from'koa-static';
import views from 'koa-views';
import router from './route/router';
const routerForAllow = new Router();
const app = new Koa();

//使用babel编译之后，输出的是跟路径，/
console.log(__dirname);
let staticPath = process.cwd()+"/dist/static";
app.use(staticServer(staticPath));

// Must be used before any router is used
// 无模板引擎
// app.use(views(process.cwd() + '/dist/views'));
// ejs模板引擎
// 配置扩展名 ejs
app.use(views(process.cwd() + '/dist/views', {
    extension: 'ejs'
    // map: {html: 'ejs'}
}))

//日志处理
app.use(logger());
// 使用路由中间件
app.use(router.router.routes())
    .use(routerForAllow.allowedMethods());

//服务端口
app.listen(8113);
