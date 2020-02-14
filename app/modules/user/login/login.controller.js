const bcrypt = require('bcryptjs');

const { findEmail, checkpassword } = require('./login.query');
const { validationResult } = require('express-validator');

const loginUser = async(req, res) => {
    try {
        const validation = validationResult(req);
        if (!validation.isEmpty())
            return res.send(validation);
        console.log("gdg")
        const username = await findEmail(req)
        if (!username)
            res.send("email doesnot exists")


        bcrypt.compare(req.body.password, username.password, function(err, isMatch) {
            if (err) {
                throw err
            } else if (!isMatch) {
                res.send("Invalid login!")
            } else {
                res.send("login successfull!")
            }
        })

    } catch (e) {
        res.send({ status: 500, error: e });

    }
}
module.exports = loginUser;