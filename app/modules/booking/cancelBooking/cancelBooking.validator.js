const { body, param } = require('express-validator')

const cancelBookingValidator = [
    body('booking_id').trim()
    .isInt()
]


module.exports = cancelBookingValidator;