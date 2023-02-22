const express=require('express');
const router= express.Router();
const SignUpTemplate=require('../Models/SignupModel')
const AppliedPatients=require('../Models/Applicants')

router.post('/signup', (request, response)=>{
    const Signedupuser= new SignUpTemplate({
        FullName: request.body.FullName,
        Email:request.body.Email,
        City:request.body.City,
        Password:request.body.Password,
        Gender:request.body.Gender
    })
    Signedupuser.save()
    .then(data=>{
        response.json(data)
    })
    .catch(error=>{
        response.json(error)
    })
})

router.route("/getData").get((req,res)=>{
    SignUpTemplate.find()
    .then(patients=>res.json(patients))
})



router.post('/applicants', (request, response)=>{
    const Applicants= new AppliedPatients({
        FirstName: request.body.FirstName,
        LastName:request.body.LastName,
        Email:request.body.Email,
        PhoneNumber:request.body.PhoneNumber,
        Province:request.body.Province,
        City:request.body.City,
        Gender:request.body.Gender,
        Service:request.body.Service
    })
    Applicants.save()
    .then(data=>{
        response.json(data)
    })
    .catch(error=>{
        response.json(error)
    })
})

module.exports= router; 