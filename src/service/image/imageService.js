import image from '../../models/image';

async function createImage(user_id, name,path,size) {
    let res = await image.create({
        user_id: user_id,
        name: name,
        path: path,
        size: size,
    });
    return res;
}

async function deleteImage(id) {
    let res = await image.destroy({
        where: {
            id: id
        }
    });
    // sql
    // let res = await sequelize.query('DELETE * FROM image WHERE id = ?');
    return res;
}

async function updateImage(id, name) {
    let res = await image.update({
        name: name
    },{
        where: {
            id: id
        }
    });
    return res;
}

async function getImage(id) {
    let res = await image.findById(id);
    return res;
}

async function getAllImage() {
    let res = await image.findAll();
    return res;
}

let imageService = {
    createImage,
    deleteImage,
    updateImage,
    getImage,
    getAllImage
}
export default imageService;