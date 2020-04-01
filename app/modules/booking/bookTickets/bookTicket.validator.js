const { body, param } = require('express-validator');
const { tickets: Tickets, Sequelize } = require('../../../../models/index');
const Op = Sequelize.Op
const bookTicketValidator = [
    body('ticket_id')
    .isInt().withMessage("Invalid Type")
    .custom((ticket_id, { req }) => {
        return findAvailable(ticket_id)
            .then(ticket => {
                if (!ticket)
                    throw new Error('Invalid ticket');
                if (!checkAvailability(ticket.available_tickets, req.body.quantity))
                    throw new Error('Insufficient quantity');
                return true;
            })
    })
]
const findAvailable = async(ticket_id) => {
    return Tickets.findOne({
        attributes: ['available_tickets'],
        where: {
            id: {
                [Op.eq]: ticket_id
            }
        }
    });
}
const checkAvailability = (availableTickets, quantity) => {
    if (quantity > availableTickets)
        return false;
    return true;
};
module.exports = bookTicketValidator;