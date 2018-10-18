//图片模型
import db from '../utils/sequelizeQuery';
const {sequelize, Sequelize} = db;
let tag = sequelize.define('tag',
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
        tag:{
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        }
    },
    {
        freezeTableName: true // Model 对应的表名将与model名相同
    }
);
export default tag;
