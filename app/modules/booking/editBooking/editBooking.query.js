const { user_tickets } = require('../../../../models/index');
const editBookingQuery = async(req) => {
    return user_tickets.update({ quantity: req.body.quantity }, {
        where: {
            ticket_id: req.body.ticket_id,
            user_id: req.params.id
        }
    })

}
module.exports = editBookingQuery;