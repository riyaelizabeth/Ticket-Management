const editBookingQuery = require('./editBooking.query')
const { validationResult } = require('express-validator')
const bookTicket = async(req, res) => {
    try {
        let validation = validationResult(req);
        if (!validation.isEmpty())
            return res.send(validation)
        const result = await editBookingQuery(req);
        return res.send(result);
    } catch (e) {
        res.send({ status: 400, error: true });
    }


}

module.exports = bookTicket;