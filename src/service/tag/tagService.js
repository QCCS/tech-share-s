import tag from '../../models/tag';

async function createTag(user_id, tag_name) {
    let res = await tag.create({
        user_id: user_id,
        name: tag_name
    });
    return res;
}

async function deleteTag(id) {
    let res = await tag.destroy({
        where: {
            id: id
        }
    });
    // sql
    // let res = await sequelize.query('DELETE * FROM tag WHERE id = ?');
    return res;
}

async function updateTag(id, name) {
    let res = await tag.update({
        name: name
    },{
        where: {
            id: id
        }
    });
    return res;
}

async function getTag(id) {
    let res = await tag.findById(id);
    return res;
}

async function getAllTag() {
    let res = await tag.findAll();
    return res;
}

let tagService = {
    createTag,
    deleteTag,
    updateTag,
    getTag,
    getAllTag
}
export default tagService;