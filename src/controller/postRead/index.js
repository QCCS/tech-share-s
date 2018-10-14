import postReadService from '../../service/postRead/postReadService';
async function createPostRead(ctx) {
    let data = ctx.request.body;
    console.log(data);
    //事务
    //需要插入 post_postRead
    let postRead = await postReadService.createPostRead(data.id,data.name);
    ctx.body = postRead;
    console.log(postRead);
}
async function deletePostRead(ctx) {
    let b = await postReadService.deletePostRead(ctx.params.id);
    ctx.body = b;
    console.log(b);
}
async function getPostRead(ctx) {
    let postRead = await postReadService.getPostRead(ctx.params.id);
    ctx.body = postRead;
    console.log(postRead)
}
async function getAllPostRead(ctx) {
    let postRead = await postReadService.getAllPostRead();
    ctx.body = postRead;
    console.log(postRead)
}

let postReadController = {
    createPostRead,
    deletePostRead,
    getPostRead,
    getAllPostRead
}
export default postReadController;
