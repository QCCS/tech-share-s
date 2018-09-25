/**
 * Created by zhouli on 18/9/25
 */
import feeDao from '../../dao/fee';
const updateFeeDao = feeDao.updateFeeDao;

import getFeeService from './GetFeeService';

async function updateFeeService(title, des, total, date_at, u_id, id) {
    let res = {
        status: 1,
        message: 'FAILURE'
    };
    try {
        await updateFeeDao(title, des, total, date_at, u_id, id);
        res = {
            status: 1,
            message: 'SUCCESS'
        };
        try {
            let data = await getFeeService(id);
            res.data = data[0]
        }
        catch (e) {
            console.error(e);
        }
    } catch (e) {
        console.error(e);
    }
    return res
}

export default updateFeeService;