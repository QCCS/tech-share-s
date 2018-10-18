import user from '../../models/user';
async function createUser(name, password, mobile, email) {
    let res = await user.create({
        name,
        password,
        mobile,
        email
    });
    return res;

}

async function deleteUser(user_id, id) {
    let res = await user.destroy({
        where: {
            id,
            user_id
        }
    });
    // sql
    // let res = await sequelize.query('DELETE * FROM user WHERE id = ?');
    return res;
}

async function updateUser(user_id, id, name) {
    let res = await user.update(
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

async function getUser(id) {
    let res = await user.findById(id);
    return res;
}

async function getAllUser() {
    let res = await user.findAll();
    return res;
}

let userService = {
    createUser,
    deleteUser,
    updateUser,
    getUser,
    getAllUser
}
export default userService;