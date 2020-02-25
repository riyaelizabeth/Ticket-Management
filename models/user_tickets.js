'use strict';
module.exports = (sequelize, DataTypes) => {
    const user_tickets = sequelize.define('user_tickets', {
        user_id: DataTypes.INTEGER,
        ticket_id: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER,
        isActive: DataTypes.BOOLEAN,
        isDeleted: DataTypes.BOOLEAN,
    }, {});
    user_tickets.associate = function(models) {
        this.belongsTo(models.users, {
            foreignKey: 'user_id'
        });
        this.belongsTo(models.tickets, {
            foreignKey: 'ticket_id'
        });
    };
    return user_tickets;
};
``