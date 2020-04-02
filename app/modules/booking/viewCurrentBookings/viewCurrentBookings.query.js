const { user_tickets: UserTickets, users: Users, tickets: Tickets, Sequelize } = require('../../../../models/index');
const Op = Sequelize.Op;
const viewCurrentBookingsQuery = (page, pagesize) => {
    try {
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
        if (page, pagesize) {
            const offset = page * pagesize
            const limit = pagesize
            query = {
                limit: limit,
                offset: offset
            }

        }

        return UserTickets.findAll(query);
    } catch (e) {
        console.log(e);
    }
}
module.exports = viewCurrentBookingsQuery;