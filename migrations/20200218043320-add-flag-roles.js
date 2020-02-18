'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.addColumn('roles',
            'isActive', {
                type: Sequelize.BOOLEAN,
            }

        ).then(value => {
            queryInterface.addColumn('roles',
                'isDeleted', {
                    type: Sequelize.BOOLEAN,
                }
            )

        })
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('roles', 'isActive').then(value => {
            queryInterface.removeColumn('roles', 'isDeleted')
        })
    }
};