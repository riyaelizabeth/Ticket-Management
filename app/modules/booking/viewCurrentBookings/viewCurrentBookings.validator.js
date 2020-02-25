const { body } = require('express-validator');
const viewCurrentBookingsValidator = [
    body()
]
module.exports = viewCurrentBookingsValidator;