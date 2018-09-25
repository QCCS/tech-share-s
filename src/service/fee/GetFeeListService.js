/**
 * Created by zhouli on 18/9/25
 */
import feeDao from '../../dao/fee';
const getFeeListDao = feeDao.getFeeListDao;
async function getFeeListService() {
    let res = {
        status: 1,
        message: 'FAILURE'
    };
    try {
        let data = await getFeeListDao();
        res = {
            status: 1,
            message: 'SUCCESS',
            data: data
        }
    } catch (e) {
        console.error(e)
    }
    return res
}

export default getFeeListService;