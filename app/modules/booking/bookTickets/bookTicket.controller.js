const { bookTicketQuery, decrementAvailableTickets } = require('./bookTicket.query');
const { validationResult } = require('express-validator');
const { sequelize } = require('../../../../models');
const HttpStatus = require('http-status-codes');
const auth = require('../bookTickets/authhelper');
const bookTicket = async(req, res) => {
    try {
        console.log(req.body)
        let validation = validationResult(req);
        if (!validation.isEmpty()) {
            return res
                .send(validation)
        }

        await auth.verifytoken(req, res);
        if (req.user.id) {

            transaction = await sequelize.transaction();
            await Promise.all([
                bookTicketQuery(req, transaction),
                decrementAvailableTickets(req.body, transaction)
            ]);
            return res.send("booking created")
        } else {
            res.send()
        }
    } catch (e) {
        res
        //  status(HttpStatus.getStatusCode('Server Error'))
            .send({ message: e.message });
    }
}
module.exports = bookTicket;