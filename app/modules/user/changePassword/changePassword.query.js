const { users: Users, Sequelize } = require('../../../../models');
const Op = Sequelize.Op;
const findPassword = async(email, userId) => {
    return Users.findOne({
        attributes: ['password'],
        where: {
            id: {
                [Op.eq]: userId
            },
            email: {
                [Op.eq]: email
            }
        }
    })
}
const resetPasswordQuery = async(body, enPassword) => {
    return Users.update({ password: enPassword }, {
        where: {
            id: {
                [Op.eq]: body.id
            },
            email: {
                [Op.eq]: body.email
            }
        }
    })
}
module.exports = {
    findPassword,
    resetPasswordQuery
}