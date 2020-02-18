'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('users',
            'isActive', {
                type: Sequelize.BOOLEAN,
            }

        ).then(value => {
            queryInterface.addColumn('users',
                'isDeleted', {
                    type: Sequelize.BOOLEAN,
                }
            )

        })
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('users', 'isActive').then(value => {
                queryInterface.removeColumn('users', 'isDeleted')
            })
            /*
              Add reverting commands here.
              Return a promise to correctly handle asynchronicity.

              Example:
              return queryInterface.dropTable('users');
            */
    }
};