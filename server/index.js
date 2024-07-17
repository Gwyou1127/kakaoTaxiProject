import express from 'express' 
import cors from 'cors'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import router from './routes/index.js'

dotenv.config()

const app = express()

app.use(cors({
    origin: process.env.FRONTED_URL,
    Credential: true
}))
app.use(express.json())
app.use(cookieParser())

const PORT = process.env.PORT || 8080
var MONGODB_URI = process.env.MONGODB_URI;
MONGODB_URI = MONGODB_URI.replace('{password}',encodeURIComponent("sds9050@#!"))
console.log(`MONGODB_URI:${MONGODB_URI}`);

app.use('/api', router)

mongoose
    .connect(
        MONGODB_URI,
        {},
    )
    .then(()=>console.log("mongoose atlas connected"))
    .catch((e)=>console.log(e))

app.listen(PORT, ()=>{
    console.log(`express server running at ${PORT}`)
})
