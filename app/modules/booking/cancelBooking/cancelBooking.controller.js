const cancelBookingQuery = require('./cancelBooking.query');
const { validationResult } = require('express-validator');

const cancelBooking = async(req, res) => {
    try {
        let resu = validationResult(req);
        if (!resu.isEmpty())
            return res.sendStatus(resu)
        const result = await cancelBookingQuery(req.body);
        return res.sendStatus(result);
    } catch (e) {
        return res.sendStatus(400)
    }

}
module.exports = cancelBooking;