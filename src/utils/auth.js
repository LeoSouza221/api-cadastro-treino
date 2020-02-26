const jwt = require('jsonwebtoken');

module.exports = {
    validate(req, res, next) {
        const token = req.headers['x-access-token'];

        if (token) {
            jwt.verify(token, process.env.JWT_KEY, function(err, decoded) {
                if (err) {
                    return res.status(403).json({
                        success: false,
                        msg: '403 - Token Invalido'
                    });
                }
                next();
            })
        } else if (req.url === '/api/user/login') {
            next();
            return;
        } else {
            return res.status(401).json({
                success: false,
                msg: '401 - unauthorized'
            });
        }
    }
}