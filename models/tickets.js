'use strict';
module.exports = (sequelize, DataTypes) => {
  const tickets = sequelize.define('tickets', {
    movie_name: DataTypes.STRING,
    available_tickets: DataTypes.INTEGER
  }, {});
  tickets.associate = function(models) {
    // associations can be defined here
  };
  return tickets;
};