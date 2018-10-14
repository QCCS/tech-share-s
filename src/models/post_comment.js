//博客-评论模型
import db from '../utils/sequelizeQuery';
const {sequelize, Sequelize} = db;
let post_comment = sequelize.define('post_comment',
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
        comment_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },

    },
    {
        freezeTableName: true // Model 对应的表名将与model名相同
    }
);
export default post_comment;
