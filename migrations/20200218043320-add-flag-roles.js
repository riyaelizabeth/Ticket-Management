'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.addColumn('roles',
            'isActive', {
                type: Sequelize.BOOLEAN,
                defaultValue: true
            }

        ).then(value => {
            queryInterface.addColumn('roles',
                'isDeleted', {
                    type: Sequelize.BOOLEAN,
                    defaultValue: false
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