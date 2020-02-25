const viewCurrentBookingsQuery = require('./viewCurrentBookings.query')
const { validationResult } = require('express-validator');
const viewCurrentBookings = async(req, res) => {
    try {
        const validation = validationResult(req);
        console.log("&&&&")
        if (!validation.isEmpty())
            return res.send(validation);

        const result = await viewCurrentBookingsQuery();

        if (!result.length)
            return res.send("No bookings found");

        return res.send(result);
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
}
module.exports = viewCurrentBookings;