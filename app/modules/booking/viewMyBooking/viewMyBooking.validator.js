const validationResult = require('express-validator')
const { body, param } = require('express-validator')
const viewMyBookingValidator = [
    param('id')
    .isInt()
]

module.exports = viewMyBookingValidator;