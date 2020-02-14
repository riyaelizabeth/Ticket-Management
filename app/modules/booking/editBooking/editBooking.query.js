const { user_tickets } = require('../../../../models/index');
const editBookingQuery = async(req) => {

    return user_tickets.update({ quantity: req.body.quantity }, {
        where: {
            ticket_id: req.body.ticket_id
        }
    })

}
module.exports = editBookingQuery;