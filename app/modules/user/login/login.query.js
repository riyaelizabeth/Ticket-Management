const { users: Users } = require('../../../../models');

const bcrypt = require('bcryptjs');

const { Op } = require("sequelize");
const findEmail = async(req) => {




    return Users.findOne({ where: { email: req.body.email } });






}

module.exports = { findEmail }