const { param } = require('express-validator');
const ticketBookingsValidator = [
    param('id')
    .isInt()
]

module.exports = ticketBookingsValidator;