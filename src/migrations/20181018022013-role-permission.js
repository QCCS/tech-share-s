'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('role-permission', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            role_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            permission_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('role-permission');
    }
};
