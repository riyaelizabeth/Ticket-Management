const router = require('express').Router();

const viewMyBookingValidator = require('./viewMyBooking/viewMyBooking.validator');
const viewMyBooking = require('./viewMyBooking/viewMyBooking.controller');
const bookTicketValidator = require('./bookTickets/bookTicket.validator');
const bookTicket = require('./bookTickets/bookTicket.controller');
const cancelBooking = require('./cancelBooking/cancelBooking.controller')
const cancelBookingValidator = require('./cancelBooking/cancelBooking.validator')
const editBooking = require('./editBooking/editBooking.controller')
const editBookingValidator = require('./editBooking/editBooking.validator')




module.exports = () => {
    router.route('/api/user/:id')
        .get(viewMyBookingValidator, viewMyBooking)
        .post(bookTicketValidator, bookTicket)
        .put(editBookingValidator, editBooking)
        .delete(cancelBookingValidator, cancelBooking)
    return router;


}