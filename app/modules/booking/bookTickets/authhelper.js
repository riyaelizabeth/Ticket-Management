const jwt = require('jsonwebtoken')
const config = require('../../../../config/config')

const json = require('jsonwebtoken');

const generateToken = (id, res) => {
    let token = json.sign({ id: id }, config.secret, {
        expiresIn: '24h'
    });
    res.json({
        success: true,
        message: 'Authentication successful!',
        token: token
    });
}

const verifytoken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];

    if (bearerHeader) {
        console.log("keri1S")
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        if (req.token) {
            console.log("keri2")
            jwt.verify(req.token, config.secret, (err, decoded) => {
                if (err) {
                    return res.json({
                        success: false,
                        message: 'Token is not valid'
                    });
                } else {
                    req.decoded = decoded;
                    return decoded;
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