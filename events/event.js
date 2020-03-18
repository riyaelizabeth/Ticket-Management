const EventEmitter = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('loginUser', (name) => {
    console.log("Welcome " + name)
})
module.exports = {
    myEmitter
}