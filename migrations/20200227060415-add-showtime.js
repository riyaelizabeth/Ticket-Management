'use strict';



module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('tickets',
            'showTime', {
                type: Sequelize.STRING,

            }
        )
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('tickets', 'showTime')
    }
}