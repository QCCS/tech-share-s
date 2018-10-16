'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        //添加 tag_id 外键
        return queryInterface.addConstraint('post_tag', ['tag_id'], {
            type: 'FOREIGN KEY',
            name: 'tag_id_constraint_name',
            references: { //Required field
                table: 'tag',
                field: 'id'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade'
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeConstraint('post_tag', 'tag_id_constraint_name');
    }
};
