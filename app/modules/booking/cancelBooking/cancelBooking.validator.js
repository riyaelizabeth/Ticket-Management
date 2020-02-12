const { body, param } = require('express-validator')
    //const { ticket, user_tickets } = require('../../../../models/index');


const cancelBookingValidator = [
        body('id')
        .isInt()
    ]
    //.isnotEmpty(),

// body('id').custom(ticket_id => {

//     return user_tickets.findbyId(ticket_id).then(id => {
//             if (!id)
//                 throw new Error('id not found');


//})
// user_tickets.findAll({
//     where: {
//       ticket_id:id}
// .then(id =()=>





// if (name !== 'Riya')
//     throw new Error('Name not acceptable');
// else
// if (age !== 20) throw new Error('Age not acceptable');
// return true;
//})
//]

// app.post('/user', body('email').custom(value => {
//     return User.findUserByEmail(value).then(user => {
//       if (user) {
//         return Promise.reject('E-mail already in use');
//       }
//     });
//   }), (req, res) => {
//     // Handle the request
//   });

module.exports = cancelBookingValidator;