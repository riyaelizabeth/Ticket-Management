const router = require('express').Router()
const viewMyBooking = require('./viewMyBooking/viewMyBooking.controller');
const viewMyBookingValidate = require('./viewMyBooking/viewMyBooking.validator');
const addUserValidate = require('./add_User/add_User.validator');
const addUser = require('./add_User/add_User.controller');
const loginUser = require('./login/login.controller');
const loginUserValidate = require('./login/login.validator');


module.exports = () => {
    router.route('/api/users')
        .post(addUserValidate, addUser)

    router.route('/api/users/login')
        .post(loginUserValidate, loginUser)


    router.route('/api/users/:id/bookings')
        .get(viewMyBookingValidate, viewMyBooking)


    return router;

}