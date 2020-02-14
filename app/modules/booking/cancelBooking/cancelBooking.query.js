const { user_tickets } = require('../../../../models/index');
const cancelBookingQuery = async(req) => {
    console.log("in query")
    await user_tickets.find({
            where: {
                user_id: req.param.id,
                ticket_id: req.body.ticket_id
            }
        }).then((result) => {
            console.log("found")
                // user_tickets.destroy({
                //         where: {
                //             user_id: req.params.id,
                //             ticket_id: req.body.ticket_id
                //         }
                //     })
                //     .then((u) => {
                //         console.log(result);
                //         return result
                //     })
        })
        // console.log(user)
        // return (user)

}
module.exports = cancelBookingQuery;