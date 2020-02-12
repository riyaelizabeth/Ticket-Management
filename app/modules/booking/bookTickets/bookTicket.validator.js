const validationRsult = require('express-validator')
const { body, param } = require('express-validator')
const bookTicketValidator = [
    body('user_id')
    .isInt(),
    body('ticket_id')
    .isInt(),
    // body('quantity')
    // .isnotEmpty(),
    // param()
    // .isnotEmpty()
]

module.exports = bookTicketValidator;