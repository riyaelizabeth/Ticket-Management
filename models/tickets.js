'use strict';
module.exports = (sequelize, DataTypes) => {
    const tickets = sequelize.define('tickets', {
        movie_name: DataTypes.STRING,
        available_tickets: DataTypes.INTEGER,

    }, {});
    tickets.associate = function(models) {
        this.hasMany(models.user_tickets, {
            foreignKey: 'ticket_id'
        })
    };
    return tickets;
};