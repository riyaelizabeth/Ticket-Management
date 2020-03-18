const { tickets } = require('../../../../models/index');

const addTicketQuery = async(req) => {

    const newTicket = await tickets.create({
        movie_name: req.body.movie_name,
        available_tickets: req.body.available_tickets,
        showTime: req.body.show_time

    })
    console.log(newTicket);
    return newTicket.save();
}
module.exports = addTicketQuery;