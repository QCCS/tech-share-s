import comment from '../../models/comment';

async function createComment(user_id, content) {
    let res = await comment.create({
        user_id,
        comment:content
    });
    return res;
}
async function deleteComment(id) {
    let res = await comment.destroy({
        where: {
            id: id
        }
    });
    // sql
    // let res = await sequelize.query('DELETE * FROM permission WHERE id = ?');
    return res;
}

async function updateComment(id, name) {
    let res = await comment.update({
        name: name
    },{
        where: {
            id: id
        }
    });
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
    updateComment,
    getComment,
    getAllComment
}
export default commentService;