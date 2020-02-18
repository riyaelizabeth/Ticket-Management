const viewBookingsQuery = require('./viewBookings.query')
const { validationResult } = require('express-validator');
const viewBookings = async(req, res) => {
    try {
        const validation = validationResult(req);
        if (validation.isEmpty())
            return res.send(validation);

        const result = await viewBookingsQuery(req);

        if (!result.length)
            return res.send("No bookings found");

        return res.send(result);
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
}
module.exports = viewBookings;