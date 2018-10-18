// 定义路由
import Router from 'koa-router';
import loginController from '../controller/LoginController';
import userController from '../controller/user';
import roleController from '../controller/roleController';
import userGetController from '../controller/userController';
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

//测试博客后端渲染
import postService from '../service/post/postService';
import postCommentService from '../service/postComment/postCommentService';
import postTagService from '../service/postTag/postTagService';
import postLikeService from '../service/postLike/postLikeService';
import postReadService from '../service/postRead/postReadService';

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
    .get('/blog', async (ctx) => {
        let post = await postService.getAllPost();
        await ctx.render('blog_index', {
            post,
        });
    })
    .get('/blog/:id', async (ctx) => {
        let user = ctx.user;
        let post = await postService.getPost(ctx.params.id);
        let comments = await postCommentService.getCommentByPostId(ctx.params.id);
        let tags = await postTagService.getTagByPostId(ctx.params.id);
        let likes = await postLikeService.getLikeByPostId(ctx.params.id);
        let reads = await postReadService.getReadByPostId(ctx.params.id);
        await ctx.render('blog', {
            user:user,
            title:post.title,
            user_id:post.user_id,
            post,
            comments,
            tags,
            likes,
            reads
        });
    })
    //测试用get
    .get('/login', loginController)
    .post('/register', userController.createUser)
    .get('/role/add', roleAddController)
    .get('/user', userGetController)
    .get('/role', roleController)
    //费用curd
    .post('/fee', async (ctx) => {
        let data = ctx.request.body;
        console.log(ctx.user);
        console.log(data);
        let time = new Date();
        console.log(time);
        //从token中解码获取
        let userId = ctx.user.id;
        ctx.body = await addFee(data.title, data.des, data.total, time, userId);
    })
    .delete('/fee/:id', async (ctx) => {
        console.log(ctx.params.id);
        //可以做校验
        // let userId = data.userId;
        ctx.body = await deleteFee(ctx.params.id);
    })
    .put('/fee', async (ctx) => {
        let data = ctx.request.body;
        console.log(ctx.user);
        console.log(data);
        let time = new Date();
        console.log(time);
        //从token中解码获取
        let userId = ctx.user.id;
        ctx.body = await updateFee(data.title, data.des, data.total, time, userId, data.id);
    })
    .get('/feeList', async (ctx) => {
        ctx.body = await getFeeList();
    })
    .get('/fee', async (ctx) => {
        //以描述或者名称搜索
        let data = ctx.request.query;
        ctx.body = await searchFee(data.title, data.des);
    })
    .get('/fee/:id', async (ctx) => {
        console.log(ctx.params.id);
        ctx.body = await getFeeInfo(ctx.params.id);
    })
    .post('/permission', async (ctx) => {
        let data = ctx.request.body;
        let permission = await permissionService.createPermission(data.id,data.name);
        ctx.body = permission;
        console.log(permission);
    })
    .delete('/permission/:id', async (ctx) => {
        let b = await permissionService.deletePermission(ctx.params.id);
        ctx.body = b;
        console.log(b);
    })
    .put('/permission', async (ctx) => {
        let data = ctx.request.body;
        let permission = await permissionService.updatePermission(data.id,data.name);
        ctx.body = permission;
        console.log(permission);
    })
    .get('/permission/:id', async (ctx) => {
        let permission = await permissionService.getPermission(ctx.params.id);
        ctx.body = permission;
        console.log(permission)
    })
    .get('/permission', async (ctx) => {
        let permissions = await permissionService.getAllPermission();
        ctx.body = permissions;
        console.log(permissions)
    })

export default {
    router: router,
};

// 接口测试
/*先获取token
get
* http://localhost:8113/api/login?mobile=15921552946&password=mac123
*
* http://localhost:8113
*
* get
* http://localhost:8113/api/koa-test
*
* get
* http://localhost:8113/api/koa-ejs
*
* post
* http://localhost:8113/api/fee
* {
    "des":"第一个份额与",
    "title":"test fee1",
    "total":"12",
    "password":"mac1234"
}

get 单个
http://localhost:8113/api/fee/11

put
http://localhost:8113/api/fee
{
    "des":"第一个份额与",
    "title":"test 1111fee1",
    "total":"12",
    "id":12,
    "password":"mac1234"
}

get 列表
http://localhost:8113/api/feelist

get 搜索
http://localhost:8113/api/fee?title=1111fee1&des=1

permission

post
http://localhost:8113/api/permission
{
    "name":"经理",
    "id":1
}

delete
http://localhost:8113/api/permission/1

put
http://localhost:8113/api/permission
{
    "name":"经理111",
    "id":1
}

get 查询某一个
http://localhost:8113/api/permission/2

get 查询所有
http://localhost:8113/api/permission


文档 doc
http://localhost:8113/doc.json
* */