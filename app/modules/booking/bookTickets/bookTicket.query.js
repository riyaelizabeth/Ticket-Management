const { user_tickets: Bookings, tickets: Tickets, Sequelize } = require('../../../../models/index');
const Op = Sequelize.Op;
const bookTicketQuery = async(req, transaction) => {
    return Bookings.create({
            user_id: req.user.id,
            ticket_id: req.body.ticket_id,
            quantity: req.body.quantity,

        },
        transaction
    );
};
const decrementAvailableTickets = async(body, transaction) => {
    return Tickets.update({
            available_tickets: Sequelize.literal(`available_tickets-${body.quantity}`)
        }, {
            where: {
                id: {
                    [Op.eq]: body.ticket_id
                }
            }
        },
        transaction
    );
};

module.exports = {
    bookTicketQuery,
    decrementAvailableTickets
};