'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return [
            await queryInterface.addColumn('tickets', 'isActive', { type: Sequelize.BOOLEAN }),
            await queryInterface.addColumn('tickets', 'isDeleted', { type: Sequelize.BOOLEAN })
        ]
    },



    down: async(queryInterface, Sequelize) => {
            return [await queryInterface.removeColumn('tickets', 'isActive'),
                await queryInterface.removeColumn('tickets', 'isDeleted')
            ]
        }
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.dropTable('users');
        */

};