const bcrypt = require('bcryptjs');

const { addUserQuery, countUsername } = require('./add_User.query');
const { validationResult } = require('express-validator');

const addUser = async(req, res) => {
    try {
        const validation = validationResult(req);
        if (!validation.isEmpty())
            return res.send(validation);
        const res = req.body
        console.log("@@", req.body)
        const count = await countUsername(req.body.firstName);
        if (count)
            return res.send("username already exists");

        const salt = bcrypt.genSaltSync(10);
        const password = bcrypt.hashSync(req.body.firstName, salt);
        const user = await addUserQuery(req.body, password);
        return res.send({ id: user.id });
    } catch (e) {
        console.log(e)
        res.send({ status: 500, error: e });
    }
}
module.exports = addUser;