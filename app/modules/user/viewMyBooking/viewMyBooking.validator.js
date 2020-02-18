const { param } = require('express-validator');
const viewMyBookingValidate = [
    param('id')
    .isInt()
]
module.exports = viewMyBookingValidate;