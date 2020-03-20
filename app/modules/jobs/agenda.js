//const { Tickets: tickets } = require('../../../models')
const { tickets } = require('../../../../models/index');

const Agenda = require('agenda')
const mongoConnectionString = 'mongodb://127.0.0.1/agenda';
agenda = new Agenda({ db: { address: mongoConnectionString } });
agenda.define('findExpiredTickets', async job => {
    expTickets = await tickets.findAll({
        showTime: Sequelize.literal('showTime + 10,800,000')
    }, {
        where: {
            showTime: {
                [Op.lt]: moment.utc().valueOf()
            }
        }
    })
    console.log(expTickets)
    return expTickets.update({
        isActive: false

    });

})
agenda.start();
agenda.every('3 minute', 'findExpiredTickets');
module.exports = { agenda }