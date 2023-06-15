const express=require('express')
const router=express.Router()
const DoctorModel=require('../Models/DoctorModel')


router.get('/getdoctors',async (req,res)=>{
    try{
    DoctorModel.find()
    .then(patients=>res.json(patients))
    }
    catch(error){
        res.status(500).send("Internal server erro")
    }
})

module.exports = router;