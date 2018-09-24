// 定义路由
import Router from 'koa-router';
// 路由配置
const router = new Router(
    {
        prefix: '/api'//每一个路由的前缀
    }
);

router
    .get('/koa-test', async (ctx) => {
        ctx.body = "koa-router api";
    });


router
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
    });

export default {
    router: router,
};
