'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        //添加 post_id 外键
        return queryInterface.addConstraint('post_tag', ['post_id'], {
            type: 'FOREIGN KEY',
            name: 'post_id_constraint_name',
            references: { //Required field
                table: 'post',
                field: 'id'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade'
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeConstraint('post_tag', 'post_id_constraint_name');
    }
};
