import permission from '../../models/permission';
async function createPermission(id,name) {
    let res = await permission.create({
        id: id,
        name: name
    });
    return res;
}
async function deletePermission(id,name) {
    let res = await permission.update({
        id: id,
        name: name
    });
    return res;
}
async function updatePermission(id,name) {
    let res = await permission.update({
        id: id,
        name: name
    });
    return res;
}
async function getPermission(id,name) {
    let res = await permission.update({
        id: id,
        name: name
    });
    return res;
}
let permissionService = {
    createPermission,
    deletePermission,
    updatePermission,
    getPermission
}
export default permissionService;