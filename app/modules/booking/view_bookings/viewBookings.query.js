const { user_tickets: UserTickets, users: Users, tickets: Tickets, Sequelize } = require('../../../../models/index');
const Op = Sequelize.Op;
const viewBookingsQuery = async(searchKey, sortKey, sortOrder) => {
    console.log("searchhhhhs", searchKey);

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
            [sortKey, sortOrder],
        ]
    };

    if (searchKey)
        query.where = {
            [Op.or]: [{
                firstName: {
                    [Op.iLike]: `%${searchKey}%`
                }
            }, {
                lastName: {
                    [Op.iLike]: `%${searchKey}%`
                }
            }]
        };

    return Users.findAll(query);
};

module.exports = viewBookingsQuery;