const { body, param } = require('express-validator')

const cancelBookingValidator = [
    body('booking_id')
    .isInt()
]


module.exports = cancelBookingValidator;