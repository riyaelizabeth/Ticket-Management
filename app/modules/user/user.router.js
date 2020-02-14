const router = require('express').Router()



const addUserValidate = require('./add_User/add_User.validator')
const addUser = require('./add_User/add_User.controller')


module.exports = () => {
    router.route('/api/users')
        .post(addUserValidate, addUser)




    return router;

}