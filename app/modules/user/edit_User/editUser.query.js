const { users } = require('../../../../models/index');
const editUserQuery = async(req) => {

    return users.update({
        email: req.body.email,
        firstName: req.body.firstName,
        email: req.body.email,
        password: req.body.password,
        roleId: req.body.roleId,
        photo: req.file.userImage
    }, {
        where: { id: req.params.id }
    })

}
module.exports = editUserQuery;