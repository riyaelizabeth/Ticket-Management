const { body, query } = require('express-validator');
const viewBookingsValidator = [

    query('search_key').trim(),

    query('sort_key').trim()
    .isIn(['firstName', 'lastName']).withMessage('Invalid sort key'),
    query('sort_order').trim()
    .isIn(['DESC', 'ASC']).withMessage('Invalid sort order')

];
module.exports = viewBookingsValidator;