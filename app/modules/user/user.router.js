const router = require('express').Router()



const addUserValidate = require('./add_User/add_User.validator');
const addUser = require('./add_User/add_User.controller');
const loginUser = require('./login/login.controller');
const loginUserValidate = require('./login/login.validator')


module.exports = () => {
    router.route('/api/users')
        .post(addUserValidate, addUser)
        .get(loginUserValidate, loginUser)
        // router.route('/api/login')
        //     .get(loginUserValidate, loginUser)


    return router;

}