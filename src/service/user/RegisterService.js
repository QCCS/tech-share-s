/**
 * Created by zhouli on 18/9/24
 */
import userDao from '../../dao/user';

const registerDao = userDao.registerDao;

async function registerService(name, password, mobile, email) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        let data = await registerDao(name, password, mobile, email);
        res = {
            status: 0,
            message: 'SUCCESS',
            data: {
                id: data.id
            }
        }

    } catch (e) {
        console.error(e);
    }
    return res;
}

export default registerService;