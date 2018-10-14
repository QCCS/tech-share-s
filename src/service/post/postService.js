import post from '../../models/post';

async function createPost(user_id, title,desc,content,is_delete,is_draft) {
    let res = await post.create({
        user_id: user_id,
        title,
        desc,
        content,
        is_delete,
        is_draft,
    });
    return res;
}

async function deletePost(id) {
    let res = await post.destroy({
        where: {
            id: id
        }
    });
    // sql
    // let res = await sequelize.query('DELETE * FROM post WHERE id = ?');
    return res;
}

async function updatePost(id, name) {
    let res = await post.update({
        name: name
    },{
        where: {
            id: id
        }
    });
    return res;
}

async function getPost(id) {
    let res = await post.findById(id);
    return res;
}

async function getAllPost() {
    let res = await post.findAll();
    return res;
}

let postService = {
    createPost,
    deletePost,
    updatePost,
    getPost,
    getAllPost
}
export default postService;