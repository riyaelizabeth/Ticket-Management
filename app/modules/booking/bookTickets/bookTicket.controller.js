const bookTicketQuery = require('./bookTicket.query')
const { validationResult } = require('express-validator')
const bookTicket = async(req, res) => {
    try {
        let validation = validationResult(req);
        if (!validation.isEmpty())
            return res.send(validation)
        const result = await bookTicketQuery(req);
        return res.send(result);
    } catch (e) {
        res.send({ status: 500, error: true });
    }
}
module.exports = bookTicket;