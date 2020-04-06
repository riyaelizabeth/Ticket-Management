const { users: Users } = require('../../../../models');
const { Op } = require("sequelize");
const multer = require('multer');

const countUsername = async(email) => {
    return Users.count({
        where: {
            email: {
                [Op.iLike]: email,
            }
        }
    });
}

const addUserQuery = async(body, password) => {

    console.log(body);
    return Users.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password,
        roleId: body.roleId
    });
}

module.exports = {
    countUsername,
    addUserQuery
};