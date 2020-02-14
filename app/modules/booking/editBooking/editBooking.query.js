const { user_tickets } = require('../../../../models/index');
const editBookingQuery = async(req) => {
        await user_tickets.update(({
                where: {
                    user_id: req.param.id
                }
            })
        }

        module.exports = cancelBookingQuery;