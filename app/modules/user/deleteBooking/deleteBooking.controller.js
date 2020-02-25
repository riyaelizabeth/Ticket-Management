const { deleteBookingQuery, incrementAvailableTicket } = require('./deleteBooking.query')
const { user_tickets: Bookings, tickets: Tickets, sequelize } = require('../../../../models/index');

const { validationResult } = require('express-validator')
const deleteBooking = async(req, res) => {
    try {
        let validation = validationResult(req);
        if (!validation.isEmpty())
            return res.send(validation)


        transaction = await sequelize.transaction();
        const [deletedBooking] = await Promise.all([
            deleteBookingQuery(req.params.id, req.params.bookingId, transaction),
            incrementAvailableTicket(req.params.bookingId, transaction)
        ]);









        if (deletedBooking)
            return res.send("booking deleted");
    } catch (e) {
        res.send({ status: 400, message: e.message });
    }

}

module.exports = deleteBooking;