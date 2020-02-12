const validationRsult = require('express-validator')
const { body, param } = require('express-validator')
const addTicketValidator = [
    body('movie_name')
    .isString(),

    body('available_tickets')
    .isInt(),

    // param()
    // .isnotEmpty()
]

module.exports = addTicketValidator;