'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_tickets = sequelize.define('user_tickets', {
    user_id: DataTypes.INTEGER,
    ticket_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {});
  user_tickets.associate = function(models) {
    // associations can be defined here
  };
  return user_tickets;
};