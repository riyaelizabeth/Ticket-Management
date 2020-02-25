const { body } = require('express-validator')
const changePasswordValidator = [
    body('id').trim()
    .isInt().withMessage('Invalid id'),
    body('email').trim()
    .isString().withMessage('Invalid email')
]
module.exports = changePasswordValidator;