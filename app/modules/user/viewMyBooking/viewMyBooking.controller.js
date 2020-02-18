const { viewMyBookingQuery } = require('./viewMyBooking.query');
const { user_tickets: UserTickets, users: Users, tickets: Tickets } = require('../../../../models/index');
const { validationResult } = require('express-validator');
const viewMyBooking = async(req, res) => {
    try {
        const validation = validationResult(req);
        if (!validation.isEmpty())
            return res.send(validation);
        const result = await viewMyBookingQuery(req.params.id);

        if (!result)
            return res.send("No bookings found");

        return res.send(result);
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
}
module.exports = viewMyBooking;