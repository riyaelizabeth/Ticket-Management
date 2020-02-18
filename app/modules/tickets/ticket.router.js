const router = require('express').Router();
const ticketBookingsvalidator = require('./ticketBookings/ticketBookings.validator');
const ticketBookings = require('./ticketBookings/ticketBookings.controller');
const addTicket = require('../tickets/addTicket/addTicket.controller');
const addTicketValidator = require('../tickets/addTicket/addTicket.validator')


module.exports = () => {
    router.route('/api/tickets')
        .post(addTicketValidator, addTicket)
    router.route('/api/tickets/:id')
        .get(ticketBookingsvalidator, ticketBookings)
    return router;
}