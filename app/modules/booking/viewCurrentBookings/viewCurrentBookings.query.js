const { user_tickets: UserTickets, users: Users, tickets: Tickets, Sequelize } = require('../../../../models/index');
const Op = Sequelize.Op;
const viewCurrentBookingsQuery = (params) => {

    let query = {
        attributes: [
            ['id', 'booking_id'], 'ticket_id', 'quantity'
        ],
        where: {
            isDeleted: {
                [Op.eq]: 'false'
            }
        },
        include: [{
                model: Users,
                attributes: ['id', 'firstName', 'lastName']
            },
            {
                model: Tickets,
                attributes: ['movie_name']
            }
        ]

    }
    if (parseInt(parameters.limit)) {
        query.limit = parameters.limit;
        query.offset = parameters.offset;
    }
    return UserTickets.findAll(query);
}
module.exports = viewCurrentBookingsQuery;