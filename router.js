const glob = require('glob');

module.exports = (app) => {
    const options = {
        matchBase: true
    };

    glob(`*.router.js`, options, function(err, files) {
        files.forEach((file) => {
            app.use(require(`${__dirname}/${file}`)());

        });

    });
};