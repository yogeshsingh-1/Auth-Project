const User = require('../models/user');
const bcrypt =require('bcrypt');

class UserService {
    async  createUser (userData){
    const {name,email,password}  =userData;

    const user = await User.findOne({email});
    if(user?._id){
          return { success: false, statusCode: 403, message: 'User already exists' };

    }
    const hashPassword =await bcrypt.hash(password,10);
    try{
        await User.create({name,email,password : hashPassword});
        console.log("User Created!");
        return {
        success: true,
        statusCode: 200,
        message: 'User Created',
      };
    }catch(e){
        return  {
        success: false,
        statusCode: 500,
        message: 'Server Error',
      };
    }
} 
}
module.exports = new UserService();