/**
 * Created by zhouli on 18/9/24
 */
import userDao from '../../dao/user';
const editDao = userDao.editDao;
async function EditService(name, password, mobile, userId) {
    let res = {
        status: 1,
        message: 'FAILURE'
    };
    try {
        await editDao(name, password, mobile, userId);
        res = {
            status: 0,
            message: 'SUCCESS'
        }
    } catch (e) {
        console.error(e)
    }
    return res
}

export default EditService;