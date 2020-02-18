const { user_tickets } = require('../../../../models/index');
const editBookingQuery = async(req) => {
    return user_tickets.update({ quantity: req.body.quantity }, {
        where: {

            id: req.params.id
        }
    })

}
module.exports = editBookingQuery;