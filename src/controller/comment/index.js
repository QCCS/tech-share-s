// 评论 curd
import commentService from '../../service/comment/commentService';
async function createComment(ctx) {
    let data = ctx.request.body;
    console.log(data);
    //事务
    //需要插入 post_comment
    let comment = await commentService.createComment(data.id,data.name);
    ctx.body = comment;
    console.log(comment);
}
async function deleteComment(ctx) {
    let b = await commentService.deleteComment(ctx.params.id);
    ctx.body = b;
    console.log(b);
}
async function updateComment(ctx) {
    let data = ctx.request.body;
    let comment = await commentService.updateComment(data.id,data.name);
    ctx.body = comment;
    console.log(comment);
}
async function getComment(ctx) {
    let comment = await commentService.getComment(ctx.params.id);
    ctx.body = comment;
    console.log(comment)
}
async function getAllComment(ctx) {
    let comment = await commentService.getAllComment();
    ctx.body = comment;
    console.log(comment)
}

let commentController = {
    createComment,
    deleteComment,
    updateComment,
    getComment,
    getAllComment
}
export default commentController;
