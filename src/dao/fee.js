/**
 * Created by zhouli on 18/9/25
 */
/*
* 费用
*
* id id
* 标题 title
* 描述 des
* 总共 total
* 时间 date_at
* 关联用户id u_id
* */
import query from '../utils/query';

const sql = {
    insert: `
    INSERT INTO fee(title, des, total, date_at,u_id)
    VALUES(?, ?, ?, ?, ?)
  `,
    delete: `
    DELETE FROM fee
    WHERE id=?
  `,
    update: `
    UPDATE fee SET
      title=?,
      des=?,
      total=?,
      date_at=?,
      u_id=?
    WHERE id=?
  `,
    getList: `
    SELECT *
    FROM fee
  `,

    find: `
    SELECT *
    FROM fee
    WHERE id=?
  `,
    search: `
    SELECT *
    FROM fee
    WHERE title like ? or des like ?
  `
};

async function insertFeeDao(title, des, total, date_at, u_id) {
    console.log(title, des, total, date_at, u_id);
    return await query(sql.insert, [title, des, total, date_at, u_id]);
}

async function deleteFeeDao(id) {
    return await query(sql.delete, [id]);
}

async function updateFeeDao(title, des, total, date_at, u_id, id) {
    return await query(sql.update, [title, des, total, date_at, u_id, id]);
}

async function getFeeListDao() {
    return await query(sql.getList, []);
}

async function getFeeDao(id) {
    return await query(sql.find, [id]);
}

async function searchFeeDao(title, des) {
    return await query(sql.search, [title, des]);
}

//添加费用
//删除费用
//修改数据
//获取费用列表
//搜索费用
//查询费用通过ID

let feeDao = {
    insertFeeDao,
    deleteFeeDao,
    updateFeeDao,
    getFeeListDao,
    searchFeeDao,
    getFeeDao
};
export default feeDao;