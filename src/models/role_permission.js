//角色-权限模型
import db from '../utils/sequelizeQuery';
const {sequelize, Sequelize} = db;
let rolePermission = sequelize.define('role_permission',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        role_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        permission_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    },
    {
        timestamps: false,//不要默认时间，不然默认生成时间
        freezeTableName: true // Model 对应的表名将与model名相同
    }
);
export default rolePermission;
