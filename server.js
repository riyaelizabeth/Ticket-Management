const cron = require('node-cron');
const viewCurrentBookingsQuery = require('./cron/show_time')
    //const sendNotification = require('./cron/show_time')
const dotenv = require('dotenv');
var moment = require('moment');
moment().format();

const config = dotenv.config();
if (config.error)
    throw config.error;

const express = require('express');
const app = express();
port = 3000;
app.listen(port, () => console.log(`listening to port ${port}`));
// cron.schedule('1-5 * * * * *', () => {
//     const abc = async() => {
//         console.log("******************")
//         const result = await viewCurrentBookingsQuery();
//         if (!result.length)
//             console.log("No bookings found");
//         console.log('Blaaa', result);
//         console.log("time", moment().startOf('day').fromNow(), moment().endOf('day').fromNow())
//     }
//     abc();
// });
app.use(express.json());
require('./router')(app)