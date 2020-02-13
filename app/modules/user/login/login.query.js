const { users: Users } = require('../../../../models');

const bcrypt = require('bcryptjs');

const { Op } = require("sequelize");
const findEmail = async(req) => {
    //     console.log("in")
    //     return Users.count({
    //         where: {
    //             email: {
    //                 [Op.iLike]: email,
    //             }
    //         }

    //     })
    //     console.log(res)

    // }

    // const checkpassword = (loginDetail) => {
    //     console.log("jkasdj")
    //     const res = Users.findAll({
    //         attributes: [password],
    //         where: {
    //             email: {
    //                 [Op.iLike]: loginDetail
    //             }

    //         }
    //     })
    //     console.log(res)
    // }



    return Users.findOne({ where: { email: req.body.email } });
    console.log("+++++++++", project);
    if (project == null)
        console.log('Not found!');
    console.log("req.body.email", project.password);



    //  const result = { where: { password: req.body.password } })
    // if (project.password == req.body.password)
    //     console.log("valid user")
    // if (result != null) {




    bcrypt.compare(req.body.password, project.password, function(err, isMatch) {
        if (err) {
            throw err
        } else if (!isMatch) {
            console.log("Password doesn't match!")
        } else {
            console.log("Password matches!")
        }
    })

}

module.exports = { findEmail }