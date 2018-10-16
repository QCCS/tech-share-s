import fs from 'fs';
import Koa from 'koa';
import Router from 'koa-router';
import logger from 'koa-logger';
import staticServer from 'koa-static';
import koaJwt from 'koa-jwt';
import bodyParser from 'koa-bodyparser';
import koaSwagger from 'koa2-swagger-ui';
import uploader from 'koa2-file-upload';

import indexController from './controller/index';
import config from './config/index';
//拦截校验token，解密token
import error from './middleware/error';
import views from 'koa-views';
import router from './route/router';
import postModuleRouter from './route/postModuleRouter';

const routerForAllow = new Router();
const app = new Koa();
//使用babel编译之后，输出的是跟路径，/
console.log(__dirname);
//默认的静态文件
let staticPath = process.cwd() + "/dist/static";
app.use(staticServer(staticPath));
//上传的图片
let staticImgPath = process.cwd() + "/publicImg";
app.use(staticServer(staticImgPath));
//排除某些接口,不校验
app.use(koaJwt({secret: config.secret.sign}).unless({
    path: [
        /^\/api\/blog/,
        /^\/api\/login/,
        /^\/img/,//静态图片
        /^\/api\/upload/,//上传文件
        /^\/doc/,//文档忽略
        /^\/swagger/,
        /^\/api\/register/
    ]
}));

let options = {
    "url": '/api/upload',
    "provider": "local",//存储位置类型
    // "mimetypes": ['image/png','image/bmp'],
    // 如果没有配置,将不进行类型检查 http://www.freeformatter.com/mime-types-list.html
    "folder": "publicImg/images",//上传文件夹,后面 images 与 urlPath images 保持一致，这样可以直接把返回的 url 保持，
    "storeDir": 'img',//存储文件夹
    "urlPath": "images"//获取的时候url，可以存储，设置上传文件夹为静态路由，之后直接访问
}

app.use(uploader(options));

app.use(
    koaSwagger({
        routePrefix: '/swagger', // host at /swagger instead of default /docs
        swaggerOptions: {
            url: '/doc.json', // example path to json
            //json可以考虑模块导入，复用
        },
    }),
);
//token错误校验必须在 koaJwt 之后
app.use(error());

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
app.use(logger((str, args) => {
    console.log(str)
    let t = new Date();
    let _t = t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate() + "-" + t.getHours();
    let logFileName = "log" + _t + '.txt';
    fs.appendFile('logs/' + logFileName, str);
}));
//请求体处理
app.use(bodyParser());
//统一错误处理
app.on('error', function (err, ctx) {
    console.log(err);
    console.log(ctx);
});

// 使用路由中间件
app.use(indexController)
    .use(router.router.routes())
    .use(postModuleRouter.router.routes())
    .use(routerForAllow.allowedMethods());

//服务端口
app.listen(config.port);
