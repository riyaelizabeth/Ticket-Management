const {
    user_tickets: UserTickets,
    users: Users,
    tickets: Tickets,
    Sequelize
} = require('../../../../models');

const Op = Sequelize.Op;

const viewBookingDetailQuery = async(bookingId) => {
    return UserTickets.findAll({
        attributes: ['id', 'ticket_id', 'quantity'],
        where: {
            id: {
                [Op.eq]: bookingId
            }
        },
        include: [{
                model: Users,
                attributes: ['id', 'firstName', 'lastName'],
                required: true
            },
            {
                model: Tickets,
                attributes: ['movie_name'],
                required: true
            }
        ]
    });
}

module.exports = viewBookingDetailQuery;