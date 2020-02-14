const { body, param } = require('express-validator')

const cancelBookingValidator = [
    param('id')
    .isInt()
    .notEmpty(),
    body('ticket_id')
    .isInt()
]


module.exports = cancelBookingValidator;