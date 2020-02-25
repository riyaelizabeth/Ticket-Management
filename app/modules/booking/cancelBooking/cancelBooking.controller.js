const cancelBookingQuery = require('./cancelBooking.query');
const { validationResult } = require('express-validator');

const cancelBooking = async(req, res) => {
    try {
<<<<<<< HEAD
        let resu = validationResult(req);
        if (!resu.isEmpty())
            return res.sendStatus(resu)
        const result = await cancelBookingQuery(req.body);
        return res.sendStatus(result);
    } catch (e) {
        return res.sendStatus(400)
=======
        let validation = validationResult(req);
        if (!validation.isEmpty())
            return res.send(validation);
        const result = await cancelBookingQuery(req);
        if (result)
            return res.send("Deleted a booking");
        return res.send("Booking not found");
    } catch (e) {
        res.status(500).send({ message: e.message });
>>>>>>> 31cb199972c5a7f8e9b27a7edbac4b629386686b
    }
}
module.exports = cancelBooking;