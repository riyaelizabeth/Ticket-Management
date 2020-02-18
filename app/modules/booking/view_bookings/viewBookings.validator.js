const { body } = require('express-validator');
const viewMyBookingsValidator = [
    body()
    .isEmpty()
]
module.exports = viewMyBookingsValidator;