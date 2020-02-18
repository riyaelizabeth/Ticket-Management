const { param } = require('express-validator');
const viewBookingDetailValidator = [
    param('id')
    .isInt()
]
module.exports = viewBookingDetailValidator;