import Koa from 'koa';
import Router from 'koa-router';
import logger from 'koa-logger';
import staticServer from'koa-static';
import koaJwt from 'koa-jwt';

import indexController from './controller/index';
import config from './config/config.dev.js';
//拦截校验token，解密token
import error from './middleware/error';
import views from 'koa-views';
import router from './route/router';

const routerForAllow = new Router();
const app = new Koa();
app.use(error());
//排除某些接口,不校验
app.use(koaJwt({secret: config.secret.sign}).unless({path: [/^\/doc/,/^\/swagger/,/^\/api\/login/,/^\/api\/register/]}));

const koaSwagger = require('koa2-swagger-ui');

//使用babel编译之后，输出的是跟路径，/
console.log(__dirname);
let staticPath = process.cwd()+"/dist/static";
app.use(staticServer(staticPath));

app.use(
    koaSwagger({
        routePrefix: '/swagger', // host at /swagger instead of default /docs
        swaggerOptions: {
            url: 'http://localhost:8113/doc.json', // example path to json
            //json可以考虑模块导入，复用
        },
    }),
);

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

//统一错误处理
app.on('error', function (err, ctx) {
    console.log(err);
    console.log(ctx);
});

// 使用路由中间件
app.use(indexController)
    .use(router.router.routes())
    .use(routerForAllow.allowedMethods());

//服务端口
app.listen(config.port);
