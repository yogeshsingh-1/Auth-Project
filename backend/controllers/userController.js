const UserService = require('../services/userService');
const userValidation = require('../validation/userValidation');

async function createUser(req, res) {
    try {
        const body = req.body;
        const response = userValidation.signupbodyvalidation(body);
        if(!response){
             return res.status(403).json({ success : false ,message: 'Invalid Inputs' });
        }
        const { statusCode, success, message} =await UserService.createUser(body);
        return res.status(statusCode).json({ success, message });
    } catch(e) {
        return res.status(500).json({ message: 'Server side problem' });
    }
}
module.exports = { createUser };