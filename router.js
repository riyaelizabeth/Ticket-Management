const glob = require('glob');

module.exports = (app) => {
    const options = {
        matchBase: true
    };
    console.log("abc")
    glob(`*.router.js`, options, function(err, files) {
        files.forEach((file) => {
            app.use(require(`${__dirname}/${file}`)());

        });
        console.log("in router")
    });
};