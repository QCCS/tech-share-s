/**
 * Created by zhouli on 18/9/24
 * 数据库链接查询
 */
import mysql from 'mysql';
import config from '../config/config.dev.js';
let mysqlConf = config.mysql;
const pool = mysql.createPool({
    host: mysqlConf.host,
    user: mysqlConf.user,
    password: mysqlConf.password,
    database: mysqlConf.database,
    port: mysqlConf.port
});

function query(sql, values) {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err)
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    })
}

export default query;