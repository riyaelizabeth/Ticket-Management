//const { Tickets: tickets } = require('../../../models')
const { tickets } = require('../../../../models/index');

const Agenda = require('agenda')
const moogoose = require('mongoose');
// moogoose.connect('mongodb://localhost/TicketManagement')
//     .then(() => { console.log("connected to mongodb") })
//     .catch(err => {
//         console.log("error in connecting to db")
//     })

const mongoConnectionString = 'mongodb://127.0.0.1/agenda';
const agenda = new Agenda({ db: { address: mongoConnectionString } });

agenda.define('findExpiredTickets', async job => {
        expTickets = await tickets.findAll({
            showTime: Sequelize.literal(`showTime + 10,800,000`)
        }, {
            where: {
                showTime: {
                    [Op.lt]: moment().format()
                }
            }
        })
        return expTickets.update({
            isActive: false

        })

    })
    // (async function() {
agenda.start();

agenda.every('1 minute', 'findExpiredTickets');

//});
module.exports = { agenda }