const { body, param } = require('express-validator')

const cancelBookingValidator = [
    body('id')
    .isInt()
]


module.exports = cancelBookingValidator;