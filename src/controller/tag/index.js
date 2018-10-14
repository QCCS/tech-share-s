// 标签 curd
import tagService from '../../service/tag/tagService';
async function createTag(ctx) {
    let data = ctx.request.body;
    console.log(data);
    //事务
    //需要插入 post_tag
    let tag = await tagService.createTag(data.id,data.name);
    ctx.body = tag;
    console.log(tag);
}
async function deleteTag(ctx) {
    let b = await tagService.deleteTag(ctx.params.id);
    ctx.body = b;
    console.log(b);
}
async function updateTag(ctx) {
    let data = ctx.request.body;
    let tag = await tagService.updateTag(data.id,data.name);
    ctx.body = tag;
    console.log(tag);
}
async function getTag(ctx) {
    let tag = await tagService.getTag(ctx.params.id);
    ctx.body = tag;
    console.log(tag)
}
async function getAllTag(ctx) {
    let tag = await tagService.getAllTag();
    ctx.body = tag;
    console.log(tag)
}

let tagController = {
    createTag,
    deleteTag,
    updateTag,
    getTag,
    getAllTag
}
export default tagController;
