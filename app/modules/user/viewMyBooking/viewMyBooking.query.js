const { user_tickets: UserTickets, users: Users, tickets: Tickets, Sequelize } = require('../../../../models/index');
const Op = Sequelize.Op;
const viewMyBookingQuery = async(userId) => {
    return Users.findOne({
        attributes: ['id', 'firstName', 'lastName'],
        where: {
            id: {
                [Op.eq]: userId
            }
        },
        include: [{
            model: UserTickets,
            attributes: ['user_id', 'ticket_id', 'quantity'],
            required: false,
            include: [{
                model: Tickets,
                required: true,
                attributes: ['movie_name']
            }]
        }]
    });
};

module.exports = {
    viewMyBookingQuery
};