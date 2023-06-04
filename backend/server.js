const express= require('express');
const app=express(); // alias
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const cors=require('cors')
const userUrls=require('./Routes/routes')
const prescriptionUrls=require('./Routes/prescriptionroutes')
const servicesUrls=require('./Routes/services')
const doctorUrls=require('./Routes/Doctors')





//Twilio reqirements -- Texting API




dotenv.config()

mongoose.connect(process.env.DATABASE_ACESS, ()=>{console.log('database connected')})




app.use(express.json())
app.use(cors()) //it is used to blocks the browser from restricting any data 
app.use('/user', userUrls)
app.use('/prescription', prescriptionUrls)
app.use('/services', servicesUrls)
app.use('/doctors', doctorUrls)


app.listen(4000, ()=>{console.log('my app is running')})