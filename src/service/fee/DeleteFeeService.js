/**
 * Created by zhouli on 18/9/25
 */
import feeDao from '../../dao/fee';
const deleteFeeDao = feeDao.deleteFeeDao;
async function deleteFeeService(id) {
    let res = {
        status: 1,
        message: 'FAILURE'
    };
    try {
        await deleteFeeDao(id);
        res = {
            status: 1,
            message: 'SUCCESS'
        }
    } catch (e) {
        console.error(e)
    }
    return res
}

export default deleteFeeService;