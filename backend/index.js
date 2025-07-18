const express = require('express');
const app = express();

require('dotenv').config();

const userRouter = require('./routes/userRoutes');
const connectToDB = require('./config/connection');
connectToDB().then(()=>console.log(`DB connected`)).catch(e=>console.log("Error"));
// middleware 
app.use(express.json());
app.use(express.urlencoded({extended : true}));
// User Routes

app.use('/api/v1',userRouter);
app.listen(process.env.PORT,()=>console.log(`server is listening on port ${process.env.PORT}`));