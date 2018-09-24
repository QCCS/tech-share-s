//用户模型
import db from '../utils/sequelizeQuery';
const {sequelize, Sequelize} = db;
let user = sequelize.define('user',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false,//不要默认时间，不然默认生成时间
        // tableName: 'user',
        freezeTableName: true // Model 对应的表名将与model名相同
    }
);
export default user;
