const { user_tickets: UserTickets, users: Users, tickets: Tickets } = require('../../../../models/index');
const viewBookingsQuery = async(req) => {
    return UserTickets.findAll({
        attributes: ['user_id', 'ticket_id', 'quantity'],
        include: [{
                model: Users,
                attributes: ['id', 'firstName', 'lastName']
            },
            {
                model: Tickets,
                attributes: ['movie_name']
            }
        ]
    });
}
module.exports = viewBookingsQuery;