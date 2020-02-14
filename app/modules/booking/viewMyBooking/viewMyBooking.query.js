const { user_tickets } = require('../../../../models/index');
const viewMyBookingQuery = async(req) => {
    const user = await user_tickets.findAll({
        where: {
            user_id: req.params.id
        },
        attributes: ['user_id', 'ticket_id', 'quantity']
    });
    return user;
}
module.exports = viewMyBookingQuery;