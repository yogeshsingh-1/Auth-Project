const jwt = require('jsonwebtoken');
const {secretKey} = require('../config/jwtConfig');

function generateToken(user){
    const payload = {
        id : user._id,
        email  :user.email ,
        role : user.role
    }
    return jwt.sign(payload,process.env.JWT_SECRET,{expiresIn : '1h'})
}
module.exports = generateToken;
