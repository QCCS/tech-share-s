/**
 * Created by zhouli on 18/9/24
 * Sequelize数据库链接查询
 */
import Sequelize from 'sequelize';
import config from '../config/index';
let mysqlConf = config.mysql;
var sequelize = new Sequelize(mysqlConf.database, mysqlConf.user, mysqlConf.password, {
    host: mysqlConf.host,
    dialect: 'mysql',
    port: mysqlConf.port,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});
let db = {
    sequelize,
    Sequelize,//挂载方便使用
}
export default db;