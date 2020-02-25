const router = require('express').Router()
const viewMyBooking = require('./viewMyBooking/viewMyBooking.controller');
const viewMyBookingValidate = require('./viewMyBooking/viewMyBooking.validator');
const addUserValidate = require('./add_User/add_User.validator');
const addUser = require('./add_User/add_User.controller');
const loginUser = require('./login/login.controller');
const loginUserValidate = require('./login/login.validator');
const deleteBookingValidate = require('./deleteBooking/deleteBooking.validator');
const deleteBooking = require('./deleteBooking/deleteBooking.controller');
const changePasswordValidate = require('./changePassword/changePassword.validator');
const changePassword = require('./changePassword/changePassword.controller');
module.exports = () => {
    router.route('/api/users')
        .post(addUserValidate, addUser)
    router.route('/api/users/login')
        .post(loginUserValidate, loginUser)
    router.route('/api/users/:id/bookings')
        .get(viewMyBookingValidate, viewMyBooking)
    router.route('/api/users/:id/bookings/:bookingId')
        .post(deleteBookingValidate, deleteBooking)
    router.route('/api/users/resetpassword')
        .put(changePasswordValidate, changePassword)
    console.log("enterrresddd")
    return router;
}