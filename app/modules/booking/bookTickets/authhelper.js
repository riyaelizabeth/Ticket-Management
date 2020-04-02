const jwt = require('jsonwebtoken')
const config = require('../../../../config/config')

const json = require('jsonwebtoken');

const generateToken = (id, res) => {
    let token = json.sign({ id: id }, config.secret, {
        expiresIn: '24h'
    });
    return res.json({
        success: true,
        message: 'Authentication successful!',
        token: token
    });
}

const verifytoken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];

    if (bearerHeader) {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        if (req.token) {
            jwt.verify(req.token, config.secret, (err, decoded) => {
                if (err) {
                    return res.json({
                        success: false,
                        message: 'Token is not valid'
                    });
                } else {
                    req.user = {
                        id: decoded.id
                    };
                    return req
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

module.exports = { verifytoken, generateToken };