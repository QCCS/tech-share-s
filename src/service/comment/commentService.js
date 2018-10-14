import comment from '../../models/comment';

async function createComment(user_id, content) {
    let res = await comment.create({
        user_id,
        comment: content
    });
    return res;
}

async function deleteCommentByRoot(id) {
    let res = await comment.destroy({
        where: {
            id,
        }
    });
    return res;
}

async function deleteComment(id, user_id) {
    let res = await comment.destroy({
        where: {
            id,
            user_id,
        }
    });
    // sql
    // let res = await sequelize.query('DELETE * FROM permission WHERE id = ?');
    return res;
}

async function updateCommentByRoot(id, content) {
    let res = await comment.update(
        {
            comment: content
        },
        {
            where: {
                id,
            }
        }
    );
    return res;
}

async function updateComment(id, user_id, content) {
    let res = await comment.update(
        {
            comment: content
        },
        {
            where: {
                id,
                user_id
            }
        }
    );
    return res;
}

async function getComment(id) {
    let res = await comment.findById(id);
    return res;
}

async function getAllComment() {
    let res = await comment.findAll();
    return res;
}

let commentService = {
    createComment,
    deleteComment,
    deleteCommentByRoot,
    updateComment,
    updateCommentByRoot,
    getComment,
    getAllComment
}
export default commentService;