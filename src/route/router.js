// 定义路由
import Router from 'koa-router';
import loginController from '../controller/LoginController';
import roleController from '../controller/roleController';
import userController from '../controller/userController';
import roleAddController from '../controller/roleAddController';

// 费用CURD
import addFee from '../service/fee/AddFeeService';
import deleteFee from '../service/fee/DeleteFeeService';
import updateFee from '../service/fee/UpdateFeeService';
import searchFee from '../service/fee/SearchFeeService';
import getFeeList from '../service/fee/GetFeeListService';
import getFeeInfo from '../service/fee/GetFeeService';

//权限curd
import permissionService from '../service/permission/permissionService'

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
    .get('/role', roleController)
    //费用curd
    .post('/fee', async (ctx) => {
        let data = ctx.request.body;
        console.log(data);
        let time = new Date();
        console.log(time);
        ctx.body = await addFee(data.title, data.des, data.total, time, data.userId);
    })
    .delete('/fee/:id', async (ctx) => {
        console.log(ctx.params.id);
        //可以做校验
        // let userId = data.userId;
        ctx.body = await deleteFee(ctx.params.id);
    })
    .put('/fee', async (ctx) => {
        let data = ctx.request.body;
        let time = new Date();
        ctx.body = await updateFee(data.title, data.des, data.total, time, data.userId, data.id);
    })
    .get('/feeList', async (ctx) => {
        ctx.body = await getFeeList();
    })
    .get('/fee', async (ctx) => {
        let data = ctx.request.query;
        console.log(data);
        ctx.body = await searchFee(data.title, data.des);
    })
    .get('/fee/:id', async (ctx) => {
        console.log(ctx.params.id);
        ctx.body = await getFeeInfo(ctx.params.id);
    })
    .post('permission', async (ctx) => {
        let data = ctx.body;
        let permission = await permissionService.createPermission(data.id,data.name);
        ctx.body = permission;
        console.log(permission);
    })
    .delete('permission/:id', async (ctx) => {
        let b = await permissionService.deletePermission(ctx.params.id);
        ctx.body = b;
        console.log(b);
    })
    .put('permission', async (ctx) => {
        let data = ctx.body;
        let permission = await permissionService.updatePermission(data.id,data.name);
        ctx.body = permission;
        console.log(permission);
    })
    .get('permission/:id', async (ctx) => {
        let permission = await permissionService.getPermission(ctx.params.id);
        ctx.body = permission;
        console.log(permission)
    })
    .get('permission', async (ctx) => {
        let permissions = await permissionService.getAllPermission();
        ctx.body = permissions;
        console.log(permissions)
    })


export default {
    router: router,
};
