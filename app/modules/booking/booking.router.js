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
const viewCurrentBookingsValidator = require('./viewCurrentBookings/viewCurrentBookings.validator');
const viewCurrentBookings = require('./viewCurrentBookings/viewCurrentBookings.controller');
// const searchBookingsValidator = require('./searchBookings/searchBookings.validator');
// const searchBookings = require('./searchBookings/searchBookings.controller');


module.exports = () => {
    router.route('/api/bookings/:id')
        .get(viewMyBookingValidator, viewMyBooking)
        .post(bookTicketValidator, bookTicket)
        .put(editBookingValidator, editBooking)
        .delete(cancelBookingValidator, cancelBooking)
    router.route('/api/bookings')
        .get(viewBookingsValidator, viewBookings)
        //router.route('/api/bookings/:id')
        //.get(viewBookingDetailValidator, viewBookingDetail)
    router.route('/api/currentbookings')
        .get(viewCurrentBookingsValidator, viewCurrentBookings)
    return router;
}