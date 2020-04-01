const { bookTicketQuery, decrementAvailableTickets } = require('./bookTicket.query');
const { validationResult } = require('express-validator');
const { sequelize } = require('../../../../models');
const HttpStatus = require('http-status-codes');
const auth = require('../bookTickets/authhelper');
const bookTicket = async(req, res) => {
    try {
        let validation = validationResult(req);
        if (!validation.isEmpty()) {
            return res
                .status(HTTPStatus.ACCEPTED)
                .send(validation)
        }
        const verify = await auth.verifytoken(req);
        console.log(verify)
        if (verify) {
            transaction = await sequelize.transaction();
            const [userBooking] = await Promise.all([
                bookTicketQuery(req, verify, transaction),
                decrementAvailableTickets(req.body, transaction)
            ]);
            return res
                .status(HTTPStatus.OK)
                .message("created and updated")
        } else {
            res.send()
        }
    } catch (e) {
        res.
        status(HttpStatus.getStatusCode('Server Error'))
            .send({ message: e.message });
    }
}
module.exports = bookTicket;