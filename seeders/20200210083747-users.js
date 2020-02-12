'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [{
            firstName: 'Admin',
            lastName: '',
            email: 'admin@yopmail.com',
            password: '123456',
            roleId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users', null, {});
    }
};