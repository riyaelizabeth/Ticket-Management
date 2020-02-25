const { param } = require('express-validator');
const deleteBookingValidate = [
    param('id')
    .isInt()
    .notEmpty(),
    param('bookingId')
    .isInt()
    .notEmpty()
]

module.exports =
    deleteBookingValidate;