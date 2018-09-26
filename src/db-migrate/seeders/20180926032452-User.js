'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
              */

        return queryInterface.bulkInsert('user', [{
            firstName: 'zhouli',
            lastName: "li"
        }], {});
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
