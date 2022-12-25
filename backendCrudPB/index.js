import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';
import AuthRoute from './Routes/AuthRoute.js'
import UserRoute from './Routes/UserRoute.js'
import CourRoute from './Routes/CourRoute.js'

//routes
const app = express();


//Middleware
app.use(bodyParser.json({limit: '30mb',extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb',extended: true}))
app.use(cors())
dotenv.config()
mongoose.connect(process.env.MONGO_DB,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).
then(()=>app.listen(process.env.PORT,console.log(`<INFO [ok]> listning at ${process.env.PORT} ...`)))
.catch((error)=>console.log(error))


//routage 
app.use('/auth', AuthRoute)
app.use('/users', UserRoute)
app.use('/cours',CourRoute)