'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('user-role', {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
          },
          user_id: {
              allowNull: false,
              type: Sequelize.INTEGER,
          },
          role_id: {
              allowNull: false,
              type: Sequelize.INTEGER,
          },
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('user-role');
  }
};
