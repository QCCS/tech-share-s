//用户-角色模型
import db from '../utils/sequelize-query';
const {sequelize, Sequelize} = db;
let userRole = sequelize.define('user_role',
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
        role_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    },
    {
        timestamps: false,//不要默认时间，不然默认生成时间
        freezeTableName: true // Model 对应的表名将与model名相同
    }
);
export default userRole;
