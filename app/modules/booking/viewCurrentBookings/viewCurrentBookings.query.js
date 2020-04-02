const { user_tickets: UserTickets, users: Users, tickets: Tickets, Sequelize } = require('../../../../models/index');
const Op = Sequelize.Op;
const paginate = require('../../pagination')
const viewCurrentBookingsQuery = (page, pagesize) => {

    const result = UserTickets.findAll(
            //Object.assign({
            paginate({
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
                }, { page, pagesize },
                //),
            )
        )
        // },
    return result;
}
module.exports = viewCurrentBookingsQuery;