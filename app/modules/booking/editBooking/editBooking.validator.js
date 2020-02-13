const { body, param } = require('express-validator')

const editBookingValidator = [
    body('quantity')
    .isInt(),
    param('id')
    .notEmpty()
]


module.exports = editBookingValidator;