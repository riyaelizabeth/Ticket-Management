const { param } = require('express-validator');
const ticketBookingsValidator = [
    param('id')
    .isInt()
]
console.log("******")
module.exports = ticketBookingsValidator;