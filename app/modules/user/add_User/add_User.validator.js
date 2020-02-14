const validationRsult = require('express-validator')
const { body } = require('express-validator')
const addUserValidator = [
    body('firstName').trim()
    .isLength({ max: 30 }).withMessage("Length not satisfied"),
    body('email').trim()
    .isEmail().withMessage("Invalid email"),

    // param()
    // .isNotEmpty()
]

module.exports = addUserValidator;