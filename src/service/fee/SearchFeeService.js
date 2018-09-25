/**
 * Created by zhouli on 18/9/25
 */
import feeDao from '../../dao/fee';
const searchFeeDao = feeDao.searchFeeDao;

async function searchFeeService(title, des) {
    let res = {
        status: 1,
        message: 'FAILURE'
    };
    try {
        let data = await searchFeeDao(`%${title}%`, `%${des}%`);
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

export default searchFeeService;