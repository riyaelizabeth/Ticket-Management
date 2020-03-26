const { bookTicketQuery, decrementAvailableTickets } = require('./bookTicket.query');
const { validationResult } = require('express-validator');
const { sequelize } = require('../../../../models');
require('../../jobs/agenda');
const bookTicket = async(req, res) => {
    try {
        const job = agenda.create('findBookings');
        await job.save();
        console.log('Job successfully saved');
        agenda.schedule('in 1 minute', 'findBookings');
        let validation = validationResult(req);
        if (!validation.isEmpty()) {
            return res.send(validation);
        }
        transaction = await sequelize.transaction();
        const [userBooking] = await Promise.all([
            bookTicketQuery(req, transaction),
            decrementAvailableTickets(req.body, transaction)
        ]);
        return res.send("created & updated");
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
}

module.exports = bookTicket