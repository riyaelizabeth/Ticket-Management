const viewMyBookingQuery = require('./viewMyBooking.query')
const { validationResult } = require('express-validator')
const viewMyBooking = async(req, res) => {

    try {

        const validation = validationResult(req);
        if (!validation.isEmpty())
            return res.send(validation);

        const result = await viewMyBookingQuery(req);
        if (result.length == 0) {
            return res.send("No bookings found");
        }
        return res.send(result);

    } catch (e) {
        res.status(400).send(e);
    }


}

module.exports = viewMyBooking;