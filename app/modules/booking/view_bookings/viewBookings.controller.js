const viewBookingsQuery = require('./viewBookings.query')
const { validationResult } = require('express-validator');
const viewBookings = async(req, res) => {
    try {
        const validation = validationResult(req);
        if (validation.isEmpty())
            return res.send(validation);

        let result = await viewBookingsQuery(req.query.search_key, req.query.sort_key || 'firstName', req.query.sort_order || 'asc', req.query.page || global.DEFAULT_PAGINATION_LIMIT, req.query.pagesize || 0)
        console.log(result)
        if (!result)
            return res.send("No bookings found");
        res.send(result)
    } catch (e) {
        console.log(e)
        res.status(500).send({ message: e.message });
    }
}
module.exports = viewBookings;