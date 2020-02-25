'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return [
            await queryInterface.addColumn('user_tickets', 'isActive', {
                type: Sequelize.BOOLEAN,
                defaultValue: true
            }),
            await queryInterface.addColumn('user_tickets', 'isDeleted', { type: Sequelize.BOOLEAN, defaultValue: false })
        ]
    },



    down: async(queryInterface, Sequelize) => {
            return [await queryInterface.removeColumn('user_tickets', 'isActive'),
                await queryInterface.removeColumn('user_tickets', 'isDeleted')
            ]
        }
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.dropTable('users');
        */

};