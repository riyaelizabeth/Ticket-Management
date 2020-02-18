const ticketBookingsQuery = require('./ticketBookings.query');
const { validationResult } = require('express-validator');
const ticketBookings = async(req, res) => {
    try {
        const validation = validationResult(req);
        if (!validation.isEmpty())
            return res.send(validation);

        const result = await ticketBookingsQuery(req.params.id);
        if (!result)
            return res.send("No bookings found");

        return res.send(result);
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
}
module.exports = ticketBookings;