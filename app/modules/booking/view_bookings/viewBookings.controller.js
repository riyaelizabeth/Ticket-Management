const viewBookingsQuery = require('./viewBookings.query')
const { validationResult } = require('express-validator');
const viewBookings = async(req, res) => {
    try {
        const validation = validationResult(req);
        if (validation.isEmpty())
            return res.send(validation);
        const parameters = {
            searchKey: req.query.search_key,
            sortKey: req.query.sort_key || 'firstName',
            sortOrder: req.query.sort_order || 'asc',
            limit: req.query.pagesize || 1,
            offset: req.query.page > 1 ? req.query.page * (req.query.pagesize - 1) : 0
        }
        let result = await viewBookingsQuery(parameters)
        if (!result)
            return res.send("No bookings found");
        res.send(result)
    } catch (e) {
        console.log(e)
        res.status(500).send({ message: e.message });
    }
}
module.exports = viewBookings;