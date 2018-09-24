import role from '../../models/role';
async function createService(id,name) {
    let res = await role.create({
        id: id,
        name: name
    });
    return res;
}
export default createService;