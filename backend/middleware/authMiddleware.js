const jwt = require('jsonwebtoken')

// using for protected routes

function authenticationToken(req,res,next){
    // authorization key small milegi 
    const authHeader = req.headers["authorization"];
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized: Token missing or malformed' });
    }
    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Forbidden: Invalid or expired token' });
    }
}

module.exports = authenticationToken;