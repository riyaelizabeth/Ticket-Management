//const { Tickets: tickets } = require('../../../models')
const { tickets } = require('../../../../models/index');

const Agenda = require('agenda')
const mongoConnectionString = 'mongodb://127.0.0.1/agenda';
let agenda = new Agenda({ db: { address: mongoConnectionString } });

try {
    agenda.define('findExpiredTickets', async(job) => {
        expTickets = await tickets.findAll({
            showTime: Sequelize.literal('showTime + 10,800,000')
        }, {
            where: {
                showTime: {
                    [Op.lt]: moment.utc().valueOf()
                }
            }
        })
        expTickets.update({
            isActive: false
        });
        job.save();
    })
    agenda.start();
    agenda.every('3 minute', 'findExpiredTickets');

} catch (error) {
    console.log(error)
}


module.exports = { agenda }