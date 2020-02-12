const dotenv = require('dotenv');
const config = dotenv.config();
if (config.error)
    throw config.error;

const express = require('express');
const app = express();
port = 3000;
app.listen(port, () => console.log(`listening to port ${port}`));


app.use(express.json());
require('./router')(app)