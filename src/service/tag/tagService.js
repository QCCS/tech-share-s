import tag from '../../models/tag';

async function createTag(user_id, tag_name) {
    let res = await tag.create({
        user_id: user_id,
        tag: tag_name
    });
    return res;
}

async function deleteTag(user_id, id) {
    let res = await tag.destroy({
        where: {
            id,
            user_id
        }
    });
    // sql
    // let res = await sequelize.query('DELETE * FROM tag WHERE id = ?');
    return res;
}

async function updateTag(user_id, id, name) {
    let res = await tag.update(
        {
            name: name
        },
        {
            where: {
                user_id,
                id
            }
        }
    );
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