const { user_tickets } = require('../../../../models/index');

const bookTicketQuery = async(req) => {

    const newBooking = await tickets.create({
        user_id: req.param.user_id,
        ticket_id: req.body.ticket_id,
        quantity: req.body.quantity
    })
    console.log(newBooking);
    return newBooking.save();
}
module.exports = bookTicketQuery;