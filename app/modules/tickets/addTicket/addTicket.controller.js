const addTicketQuery = require('./addTicket.query')
const { validationResult } = require('express-validator')
const addTicket = async(req, res) => {
    try {

        let validation = validationResult(req);
        if (!validation.isEmpty())
            return res.send(validation)
        const result = await addTicketQuery(req);
        return res.send(result);
    } catch (e) {
        res.send({ status: 400, error: true });
    }


}
module.exports = addTicket;