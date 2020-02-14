const { body, param } = require('express-validator');
const bookTicketValidator = [
    param('id')
    .isInt(),
    body('ticket_id')
    .isInt()
]

module.exports = bookTicketValidator;