const { user_tickets: UserTickets, tickets: Tickets, Sequelize } = require('../../../../models/index');
const Op = Sequelize.Op;
const deleteBookingQuery = async(userid, bookingId) => {
    return UserTickets.update({ isDeleted: true }, {
        where: {
            id: {
                [Op.eq]: bookingId
            },

            user_id: {
                [Op.eq]: userid
            },
        }
    }, transaction)

}


const incrementAvailableTicket = async(bookingId, transaction) => {
    const tick = await UserTickets.findOne({
        attributes: ['quantity', 'ticket_id'],
        where: {
            id: {
                [Op.eq]: bookingId,

            }
        }
    })
    if (tick) {
        await Tickets.update({
                available_tickets: Sequelize.literal(`available_tickets + ${tick.quantity}`)

            }, {
                where: {
                    id: {
                        [Op.eq]: tick.ticket_id
                    }
                }
            },
            transaction

        );
    } else throw new Error("Invalid Booking")

}




module.exports = {
    deleteBookingQuery,
    incrementAvailableTicket
};