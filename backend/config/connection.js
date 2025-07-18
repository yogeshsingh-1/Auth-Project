const mongoose= require('mongoose');

const connectToDB = async()=>{
    await mongoose.connect(process.env.MONGO_URL,{
        maxPoolSize : 10,
        minPoolSize : 5
    });
}

module.exports = connectToDB;