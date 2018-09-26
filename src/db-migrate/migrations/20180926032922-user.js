'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
         数据库已经存在表 User1
         添加字段 firstName3
        */
        return queryInterface.addColumn(
            'user',
            'firstName3',
            Sequelize.STRING
        )
    },

    down: (queryInterface, Sequelize) => {
        /*
            数据库已经存在表 User1
            上面添加字段 firstName3
            运行 undo 的时候，删除字段
           */
        return queryInterface.removeColumn('user', 'firstName3');
    }
};
