import postRead from '../../models/post_read';

async function createPostRead(post_id, user_id) {
    let res = await postRead.create({
        post_id,
        user_id
    });
    return res;
}

async function deletePostRead(id) {
    let res = await postRead.destroy({
        where: {
            id: id
        }
    });
    // sql
    // let res = await sequelize.query('DELETE * FROM postRead WHERE id = ?');
    return res;
}
async function getPostRead(id) {
    let res = await postRead.findById(id);
    return res;
}

async function getAllPostRead() {
    let res = await postRead.findAll();
    return res;
}

let postReadService = {
    createPostRead,
    deletePostRead,
    getPostRead,
    getAllPostRead
}
export default postReadService;