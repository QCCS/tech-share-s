import postTag from '../../models/post_tag';

async function createPostTag(post_id, tag_id) {
    let res = await postTag.create({
        post_id,
        tag_id
    });
    return res;
}

async function deletePostTag(id) {
    let res = await postTag.destroy({
        where: {
            id: id
        }
    });
    // sql
    // let res = await sequelize.query('DELETE * FROM postTag WHERE id = ?');
    return res;
}



async function getPostTag(id) {
    let res = await postTag.findById(id);
    return res;
}

async function getAllPostTag() {
    let res = await postTag.findAll();
    return res;
}
async function getTagByPostId(post_id) {
    let res = await postTag.findAll({
        where: {
            post_id
        }
    });
    return res;
}

let postTagService = {
    createPostTag,
    deletePostTag,
    getPostTag,
    getAllPostTag,
    getTagByPostId
}
export default postTagService;