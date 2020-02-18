'use strict';
module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('users', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        roleId: DataTypes.INTEGER,

    }, {});
    users.associate = function(models) {
        this.hasMany(models.user_tickets, {
            foreignKey: 'user_id'
        });
    };
    return users;
};