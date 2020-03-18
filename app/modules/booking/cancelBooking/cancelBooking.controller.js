const cancelBookingQuery = require('./cancelBooking.query');
const { validationResult } = require('express-validator');

const cancelBooking = async(req, res) => {
    try {
        let validation = validationResult(req);
        if (!validation.isEmpty())
            return res.send(validation);
        const result = await cancelBookingQuery(req.params);
        if (result)
            return res.send("Deleted a booking");
        return res.send("Booking not found");
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
}
module.exports = cancelBooking;