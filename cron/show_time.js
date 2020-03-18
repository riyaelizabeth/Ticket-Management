const { user_tickets: UserTickets, users: Users, tickets: Tickets, Sequelize } = require('../models/index');
const Op = Sequelize.Op;
var moment = require('moment');
moment().format();

const viewCurrentBookingsQuery = () => {
    return Tickets.findAll({
        attributes: ['movie_name', 'showTime'],
        required: true,
        where: {
            // isDeleted: {
            //     [Op.eq]: 'false'
            // },
            showTime: {
                [Op.between]: [moment().startOf('day').fromNow(), moment().endOf('day').fromNow()]
            },

        },
        // include: [{
        //     model: UserTickets,
        //     required: true,
        //     attributes: ['id', 'ticket_id'],
        //     include: [{
        //         model: Users,
        //         attributes: ['firstName']
        //     }]

        //     // where: {
        //     //     showTime: {
        //     //         [Op.between]: [moment().startOf('day').fromNow(), moment().endOf('day').fromNow()]
        //     //     },
        //     // },
        // }]
    });
    console.log("#####", res);
}

module.exports = viewCurrentBookingsQuery;