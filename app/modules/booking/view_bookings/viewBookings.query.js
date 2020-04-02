const { user_tickets: UserTickets, users: Users, tickets: Tickets, Sequelize } = require('../../../../models/index');
const Op = Sequelize.Op;
const viewBookingsQuery = async(parameters) => {
    let query = {
        attributes: [
            'id', 'firstName', 'lastName'
        ],
        include: [{
            model: UserTickets,
            required: true,
            attributes: ['id', 'ticket_id'],
            include: [{
                model: Tickets,
                attributes: ['movie_name']
            }]
        }],
        order: [
            [parameters.sortKey, parameters.sortOrder],
        ],

    };

    if (parameters.searchKey) {
        query.where = {
            [Op.or]: [{
                firstName: {
                    [Op.iLike]: `%${parameters.searchKey}%`
                }
            }, {
                lastName: {
                    [Op.iLike]: `%${parameters.searchKey}%`
                }
            }]
        }

    };
    if (parseInt(parameters.limit)) {
        query.limit = parameters.limit;
        query.offset = parameters.offset;
    }

    return Users.findAll(query)
}



module.exports = viewBookingsQuery;