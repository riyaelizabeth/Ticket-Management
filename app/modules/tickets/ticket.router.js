const router = require('express').Router();

const addTicket = require('../tickets/addTicket/addTicket.controller')
const addTicketValidator = require('../tickets/addTicket/addTicket.validator')


module.exports = () => {
    router.route('/api/ticket')
        .post(addTicketValidator, addTicket)
    return router;
}