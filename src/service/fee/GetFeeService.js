/**
 * Created by zhouli on 18/9/25
 */
import feeDao from '../../dao/fee';
const getFeeDao = feeDao.getFeeDao;

async function GetFeeService(id) {
    let res = {
        status: 1,
        message: 'FAILURE'
    };
    try {
        let data = await getFeeDao(id);
        res = {
            status: 1,
            message: 'SUCCESS',
            data: data[0]
        }
    } catch (e) {
        console.error(e)
    }
    return res
}

export default GetFeeService;