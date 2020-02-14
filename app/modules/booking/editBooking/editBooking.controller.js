const editBookingQuery = require('.editBooking.query')
const { validationResult } = require('express-validator')
const bookTicket = async(req, res) => {
    try {
        let resu = validationResult(req);
        if (!resu.isEmpty())
            return res.send(resu)
        const result = await editBookingQuery(req);
        return res.send(result);
    } catch (e) {
        res.send({ status: 400, error: true });
    }


}

module.exports = bookTicket;