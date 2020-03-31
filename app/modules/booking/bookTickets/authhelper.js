const jwt = require('jsonwebtoken')
const config = require('../../../../config/config')

function verifytoken(req, res, next) {

    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {

        //   const bearer = bearerHeader.split('');
        //   const bearerToken = bearer[1];
        req.token = bearerHeader;

        if (req.token) {

            jwt.verify(req.token, config.secret, (err, authData) => {
                if (err) {

                    return res.json({
                        success: false,
                        message: 'Token is not valid'
                    });
                } else {

                    next();
                }
            });
        } else {
            return res.json({
                success: false,
                message: 'Auth token is not supplied'
            });
        }
    };

}
module.exports = verifytoken;