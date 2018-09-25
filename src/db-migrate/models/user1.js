'use strict';
module.exports = (sequelize, DataTypes) => {
  const User1 = sequelize.define('User1', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
      phone1: DataTypes.STRING,
      phone: DataTypes.STRING,
  }, {});
  User1.associate = function(models) {
    // associations can be defined here
  };
    // force: true will drop the table if it already exists
    User1.sync({force: true}).then(() => {
        // Table created
        return User.create({
            firstName: 'John',
            lastName: 'Hancock'
        });
    });
  return User1;
};