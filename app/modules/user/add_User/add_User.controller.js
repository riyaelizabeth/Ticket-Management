const bcrypt = require('bcryptjs');

const { addUserQuery, countUsername } = require('./add_User.query');
const { validationResult } = require('express-validator');

const addUser = async(req, res) => {
    try {
        const validation = validationResult(req);
        if (!validation.isEmpty())
            return res.send(validation);

        const count = await countUsername(req.body.email);
        if (count)
            return res.send("username already exists");

        const salt = bcrypt.genSaltSync(10);
        const password = bcrypt.hashSync(req.body.password, salt);
        const user = await addUserQuery(req.body, password);
        return res.send({ id: user.id });
    } catch (e) {
        res.send({ status: 500, error: e });
    }
}
module.exports = addUser;