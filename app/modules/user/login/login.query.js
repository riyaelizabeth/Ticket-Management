const { users: Users } = require('../../../../models');

const bcrypt = require('bcryptjs');

const { Op } = require("sequelize");
const findEmail = async(email) => {




    return Users.findOne({ where: { email: email } });






}

module.exports = { findEmail }