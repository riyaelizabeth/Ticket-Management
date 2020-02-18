const { body } = require('express-validator')
const loginUserValidator = [
    body('email')
    .isEmail(),
    body('password')
    .notEmpty()
]
module.exports = loginUserValidator;