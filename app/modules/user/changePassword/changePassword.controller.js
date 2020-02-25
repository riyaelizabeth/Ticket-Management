const { findPassword, resetPasswordQuery } = require('./changePassword.query');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const changePassword = async(req, res) => {
    try {
        console.log('3333333333333333')
        const validation = validationResult(req);
        if (!validation.isEmpty())
            return res.send(validation);

        const credentials = await findPassword(req.body.email, req.body.id);

        if (!bcrypt.compareSync(req.body.password, credentials.password))
            return res.send("INVALID PASSWORD");

        const salt = bcrypt.genSaltSync(10);
        const enPassword = bcrypt.hashSync(req.body.newPassword, salt);
        await resetPasswordQuery(req.body, enPassword);
        return res.send("ok");
    } catch (e) {
        console.log(e);
        return res.send('Error');
    }
};

module.exports = changePassword;