const viewMyBookingQuery = require('./viewMyBooking.query')
const { validationResult } = require('express-validator')
const viewMyBooking = async(req, res) => {
    console.log("in view")
    try {
        Console.log("in")
        let resu = validationResult(req);
        if (!resu.isEmpty())
            return res.send(resu)
        const result = await viewMyBookingQuery(req);
        return res.send(result);
    } catch (e) {
        res.send({ status: 400, error: true });
    }


}

module.exports = viewMyBooking;