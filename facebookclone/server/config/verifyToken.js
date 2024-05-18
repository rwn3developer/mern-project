const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token){
        return res.status(403).send({
            success: false,
            message: 'Token is blank'
        });
    }

    var doneToken = token.split(' ')[1];
    jwt.verify(doneToken,'mahadev',(err,decode)=>{
        if (err) {
            return res.status(403).send({
                success: false,
                message: 'Token is not valid'
            });
        }
        req.user = decode; // Store user data in the request object
        next();
    })
}

module.exports = {
    verifyToken
};