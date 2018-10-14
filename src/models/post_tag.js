//博客-标签模型
import db from '../utils/sequelizeQuery';
const {sequelize, Sequelize} = db;
let post_tag = sequelize.define('post_tag',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        post_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        tag_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },

    },
    {
        freezeTableName: true // Model 对应的表名将与model名相同
    }
);
export default post_tag;
