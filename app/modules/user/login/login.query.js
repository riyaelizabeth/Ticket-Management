const { users: Users } = require('../../../../models');
const findEmail = async(email) => {
    return Users.findOne({ where: { email: email } });
}
module.exports = { findEmail }