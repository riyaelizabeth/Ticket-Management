const editUserQuery = require('./editUser.query')
const { validationResult } = require('express-validator')
const editUser = async(req, res) => {
    try {
        let validation = validationResult(req);
        if (!validation.isEmpty())
            return res.send(validation)
        const result = await editUserQuery(req);
        console.log(result)
            //return res.send(result);
    } catch (e) {

        res.send(e.message);

    }

}

module.exports = editUser;