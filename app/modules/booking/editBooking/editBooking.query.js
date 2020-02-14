const { user_tickets } = require('../../../../models/index');
const editBookingQuery = async(req) => {
    await user_tickets.update({
        where: {
            quantity: req.param.quantity
        }
    })

}
module.exports = editBookingQuery;