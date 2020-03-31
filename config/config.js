require('dotenv').config();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
module.exports = {
        secret: 'mysecret',
        username: process.env.POSTGRES_DB_USERNAME,
        password: process.env.POSTGRES_DB_PASSWORD,
        database: process.env.POSTGRES_DB_NAME,
        host: process.env.POSTGRES_DB_HOST,
        dialect: 'postgres',
        operatorsAliases: {
            $and: Op.and,
            $or: Op.or,
            $eq: Op.eq,
            $gt: Op.gt,
            $lt: Op.lt,
            $lte: Op.lte,
            $like: Op.like
        }
    }
    // module.exports = {
    //     secret: 'mysecret'
    // }