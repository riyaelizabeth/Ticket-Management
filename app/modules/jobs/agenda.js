//const { Tickets: tickets } = require('../../../models')
const { tickets } = require('../../../../models/index');

const Agenda = require('agenda')
const mongoConnectionString = 'mongodb://127.0.0.1/agenda';
let agenda = new Agenda({ db: { address: mongoConnectionString } });

try {

    agenda.on("ready", function() {
        console.log("######################################################3")
        agenda.start()
    });

    agenda.define('findBookings', async() => {
        console.log("@@@@@@@")
            //     B = await tickets.findAll({
            //         showTime: Sequelize.literal('showTime + 10,800,000')
            //     }, {
            //         where: {
            //             showTime: {
            //                 [Op.lt]: moment.utc().valueOf()
            //             }
            //         }
            //     })
            //     await expTickets.update({
            //         isActive: false
            //     });

    });

    agenda.every('2 minutes', 'findBookings');

} catch (error) {
    console.log(error)
}
module.exports = agenda;