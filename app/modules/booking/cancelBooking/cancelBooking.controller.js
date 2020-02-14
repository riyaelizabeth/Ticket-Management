const cancelBookingQuery = require('./cancelBooking.query');
const { validationResult } = require('express-validator');

const cancelBooking = async(req, res) => {
    try {
        let resu = validationResult(req);
        if (!resu.isEmpty())
            return res.send(resu)
        const result = await cancelBookingQuery(req.body);
        return res.send(result);
    } catch (e) {
        res.send({ status: 400, error: true });
    }

}
module.exports = cancelBooking;