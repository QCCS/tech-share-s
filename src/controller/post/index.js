// 博客 curd
import postService from '../../service/post/postService';
async function createPost(ctx) {
    let data = ctx.request.body;
    console.log(data);
    //事务
    //需要插入
    let post = await postService.createPost(data.id,data.name);
    ctx.body = post;
    console.log(post);
}
async function deletePost(ctx) {
    let b = await postService.deletePost(ctx.params.id);
    ctx.body = b;
    console.log(b);
}
async function updatePost(ctx) {
    let data = ctx.request.body;
    let post = await postService.updatePost(data.id,data.name);
    ctx.body = post;
    console.log(post);
}
async function getPost(ctx) {
    let post = await postService.getPost(ctx.params.id);
    ctx.body = post;
    console.log(post)
}
async function getAllPost(ctx) {
    let post = await postService.getAllPost();
    ctx.body = post;
    console.log(post)
}

let postController = {
    createPost,
    deletePost,
    updatePost,
    getPost,
    getAllPost
}
export default postController;
