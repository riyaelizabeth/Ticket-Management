const viewCurrentBookingsQuery = require('./viewCurrentBookings.query')
const { validationResult } = require('express-validator');
const viewCurrentBookings = async(req, res) => {
    try {
        const validation = validationResult(req);
        if (!validation.isEmpty())
            return res.send(validation);
        const parameters = {
            searchKey: req.query.search_key,
            sortKey: req.query.sort_key || 'firstName',
            sortOrder: req.query.sort_order || 'asc',
            limit: req.query.pagesize || global.DEFAULT_PAGINATION_LIMIT,
            offset: req.query.page > 1 ? req.query.page * (req.query.pagesize - 1) : 0
        }
        const result = await viewCurrentBookingsQuery(parameters);

        if (!result.length)
            return res.send("No bookings found");

        return res.send(result);
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
}
module.exports = viewCurrentBookings;