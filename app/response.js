var HttpStatus = require('http-status-codes');
const response = (req, res, next) => {
    res
        .status(HttpStatus.OK)
        .send('ok');

    res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send({
            error: HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR)
        });

    res
        .status(HttpStatus.getStatusCode('Server Error'))
        .send({
            error: 'Server Error'
        });
}
module.exports = response;