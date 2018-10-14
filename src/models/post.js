//博客模型
import db from '../utils/sequelizeQuery';
const {sequelize, Sequelize} = db;
let post = sequelize.define('post',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        desc: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        content: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        //是否删除
        is_delete:{
            type: Sequelize.TINYINT,//0，1
            allowNull: false,
        },
        //是否是草稿
        is_draft:{
            type: Sequelize.TINYINT,//0，1
            allowNull: false,
        },
    },
    {
        freezeTableName: true // Model 对应的表名将与model名相同
    }
);
export default post;
