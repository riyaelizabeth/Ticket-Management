const {
    user_tickets: UserTickets,
    users: Users,
    tickets: Tickets,
    Sequelize

} = require('../../../../models/index');

const Op = Sequelize.Op;

const ticketBookingsQuery = async(ticketId) => {
    return Tickets.findOne({
        attributes: ['id', 'movie_name'],
        where: {
            id: {
                [Op.eq]: ticketId
            }
        },
        include: [{
            model: UserTickets,
            required: false,
            attributes: [
                ['id', 'booking_id'], 'user_id', 'quantity'
            ],
            include: [{
                model: Users,
                required: true,
                attributes: ['firstName', 'lastName']
            }]
        }]
    })

}

module.exports = ticketBookingsQuery;