const viewBookingDetailQuery = require('./viewBookingDetail.query')
const { validationResult } = require('express-validator');
const viewBookingDetail = async(req, res) => {
    try {
        console.log('###################')
        const validation = validationResult(req);
        if (!validation.isEmpty())
            return res.send(validation);

        const result = await viewBookingDetailQuery(req.params.id);
        if (!result)
            return res.send("No bookings found");

        return res.send(result);
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
}
module.exports = viewBookingDetail;