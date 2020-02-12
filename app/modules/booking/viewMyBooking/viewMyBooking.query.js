const { user_tickets } = require('../../../../models/index');
const viewMyBookingQuery = async(req) => {
    await user_tickets.findAll({
        where: {
            user_id: req.param.id
        }
    });
}

module.exports = viewMyBookingQuery;