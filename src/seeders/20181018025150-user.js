'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
              */

        return queryInterface.bulkInsert('user', [
            {
                name: 'json.周',
                password: 'mac123',
                mobile: '15921552946',
                email: '15921552946@qq.com'
            },
            {
                name: 'json.立',
                password: 'mac123',
                mobile: '15921552947',
                email: '15921552947@qq.com'
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.
          Example:
              */

        return queryInterface.bulkDelete('user', null, {});
    }
};
