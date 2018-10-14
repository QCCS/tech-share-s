// 图片 curd
import imageService from '../../service/image/imageService';
async function createImage(ctx) {
    let data = ctx.request.body;
    console.log(data);
    //事务
    //需要插入 post_image
    let image = await imageService.createImage(data.id,data.name);
    ctx.body = image;
    console.log(image);
}
async function deleteImage(ctx) {
    let b = await imageService.deleteImage(ctx.params.id);
    ctx.body = b;
    console.log(b);
}
async function updateImage(ctx) {
    let data = ctx.request.body;
    let image = await imageService.updateImage(data.id,data.name);
    ctx.body = image;
    console.log(image);
}
async function getImage(ctx) {
    let image = await imageService.getImage(ctx.params.id);
    ctx.body = image;
    console.log(image)
}
async function getAllImage(ctx) {
    let image = await imageService.getAllImage();
    ctx.body = image;
    console.log(image)
}

let imageController = {
    createImage,
    deleteImage,
    updateImage,
    getImage,
    getAllImage
}
export default imageController;
