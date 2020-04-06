const validationRsult = require('express-validator')
const { body, param } = require('express-validator')
const editUserValidator = [
    body('firstName').trim()
    .isLength({ max: 30 }).withMessage("Length not satisfied"),
    // body('email').trim()
    // .isEmail().withMessage("Invalid email"),

    // param()
    // .isNotEmpty()
]

module.exports = editUserValidator;