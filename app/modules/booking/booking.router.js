const router = require('express').Router();
const viewMyBookingValidator = require('../user/viewMyBooking/viewMyBooking.validator');
const viewMyBooking = require('../user/viewMyBooking/viewMyBooking.controller');
const bookTicketValidator = require('./bookTickets/bookTicket.validator');
const bookTicket = require('./bookTickets/bookTicket.controller');
const cancelBooking = require('./cancelBooking/cancelBooking.controller')
const cancelBookingValidator = require('./cancelBooking/cancelBooking.validator')
const editBooking = require('./editBooking/editBooking.controller')
const editBookingValidator = require('./editBooking/editBooking.validator')
const viewBookings = require('./view_bookings/viewBookings.controller');
const viewBookingsValidator = require('./view_bookings/viewBookings.validator');
const viewBookingDetail = require('./viewBookingDetail/viewBookingDetail.controller');
const viewBookingDetailValidator = require('./viewBookingDetail/viewBookingDetail.validator');



module.exports = () => {
    router.route('/api/user/:id')
        .get(viewMyBookingValidator, viewMyBooking)
        .post(bookTicketValidator, bookTicket)
        .put(editBookingValidator, editBooking)
        .delete(cancelBookingValidator, cancelBooking)


    router.route('/api/bookings')
        .get(viewBookingsValidator, viewBookings)

    router.route('/api/bookings/:id')
        .get(viewBookingDetailValidator, viewBookingDetail)

    return router;


}