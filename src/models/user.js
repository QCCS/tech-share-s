module.exports = (sequelize, DataTypes) => sequelize.define(
  'user',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    mobile: DataTypes.STRING,
  },
  {
    tableName: 'user',
  },
);

