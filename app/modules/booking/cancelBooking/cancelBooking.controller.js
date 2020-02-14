const cancelBookingQuery = require('./cancelBooking.query');
const { validationResult } = require('express-validator');

const cancelBooking = async(req, res) => {
    try {
        let validation = validationResult(req);
        if (!validation.isEmpty())
            return res.status(200).send(validation);
        console.log("in cancel")
        const result = await cancelBookingQuery(req);
        return res.sendStatus(200);
    } catch (e) {
        return res.status(400).send(e);

    }
}
module.exports = cancelBooking;