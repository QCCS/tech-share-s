// 定义路由
import Router from 'koa-router';
import loginController from '../controller/LoginController';
import roleController from '../controller/roleController';
import userController from '../controller/userController';
import roleAddController from '../controller/roleAddController';

// 路由配置
const router = new Router(
    {
        prefix: '/api'//每一个路由的前缀
    }
);

router
    .get('/koa-test', async (ctx) => {
        ctx.body = "koa-router api";
    })
    .get('/koa-view', async (ctx) => {
        await ctx.render('index', {
            user: 'John'
        });
    })
    .get('/koa-ejs', async (ctx) => {
        await ctx.render('home', {
            title: 'home page',
            user: 'John',
        });
    })
    //测试用get
    .get('/login', loginController)
    .get('/role/add', roleAddController)
    .get('/user', userController)
    .get('/role', roleController);

export default {
    router: router,
};
