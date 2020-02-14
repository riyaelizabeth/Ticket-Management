const { user_tickets } = require('../../../../models/index');
const viewMyBookingQuery = async(req) => {
    return user_tickets.findAll({
        where: {
            user_id: req.params.id
        },
        attributes: ['user_id', 'ticket_id', 'quantity']
    });
}
module.exports = viewMyBookingQuery;