const { param } = require('express-validator');
const viewMyBookingValidator = [
    param('id')
    .isInt()
]
module.exports = viewMyBookingValidator;