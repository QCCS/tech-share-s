import postLike from '../../models/post_like';

async function createPostLike(user_id, post_id) {
    let res = await postLike.create({
        user_id,
        post_id
    });
    return res;
}

async function deletePostLike(id) {
    let res = await postLike.destroy({
        where: {
            id: id
        }
    });
    // sql
    // let res = await sequelize.query('DELETE * FROM postLike WHERE id = ?');
    return res;
}


async function getPostLike(id) {
    let res = await postLike.findById(id);
    return res;
}

async function getAllPostLike() {
    let res = await postLike.findAll();
    return res;
}

let postLikeService = {
    createPostLike,
    deletePostLike,
    getPostLike,
    getAllPostLike
}
export default postLikeService;