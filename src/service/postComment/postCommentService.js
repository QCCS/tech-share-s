import postComment from '../../models/post_comment';
import db from '../../utils/sequelizeQuery';
async function createPostComment(post_id, comment_id) {
    let res = await postComment.create({
        post_id,
        comment_id
    });
    return res;
}

async function deletePostComment(id) {
    let res = await postComment.destroy({
        where: {
            id: id
        }
    });
    // sql
    // let res = await sequelize.query('DELETE * FROM postComment WHERE id = ?');
    return res;
}

async function getPostComment(id) {
    let res = await postComment.findById(id);
    return res;
}

async function getAllPostComment() {
    let res = await postComment.findAll();
    return res;
}
async function getCommentByPostId(post_id) {
    let res = await postComment.findAll({
        where: {
            post_id
        }
    });
    return res;
}

let postCommentService = {
    createPostComment,
    deletePostComment,
    getPostComment,
    getAllPostComment,
    getCommentByPostId
}
export default postCommentService;