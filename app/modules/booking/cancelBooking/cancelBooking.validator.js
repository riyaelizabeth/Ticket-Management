const { body, param } = require('express-validator')

const cancelBookingValidator = [
    param('id').trim()
    .isInt()
]


module.exports = cancelBookingValidator;