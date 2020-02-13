const { body } = require('express-validator')
const bookTicketValidator = [
    body('user_id')
    .isInt(),
    body('ticket_id')
    .isInt()

]

module.exports = bookTicketValidator;