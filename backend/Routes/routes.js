const express=require('express');
const router= express.Router();
const SignUpTemplate=require('../Models/SignupModel')
const AppliedPatients=require('../Models/Applicants')
const accountSID='AC9b2cb1a025d47046f937947627377aa9';
const authToken='72b7e37fe3439521eaf0c15888ab76f8';
const client=require('twilio')(accountSID,authToken);
const { body, validationResult } = require('express-validator');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const JWT_SECRET='KhaqanAamir';
const fetchuser=require('../middleware/fetchuser')


//Creating a new USER

router.post('/signup',[body('Email').isEmail(),body('FullName').isLength({ min: 5 }),body('Password').isLength({ min: 3 })],  async (request, response)=>{

    let success=false;
    // checking for errors here
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ success,errors: errors.array() });
    }

    //checking if the email exists already in our database
   try{
    let user=await SignUpTemplate.findOne({Email:request.body.Email})
    if(user){
        return(
            response.json({success, error:'Sorry a user with this email already exists. Please try to SignIn with this email'})
        )        
    }
    const salt=await bcrypt.genSalt(10);
    const securePass=await bcrypt.hash(request.body.Password,salt)
   

    //creating a new patient
    const patient=await SignUpTemplate.create({
        FullName: request.body.FullName,
        Email:request.body.Email,
        PhoneNumber:request.body.PhoneNumber,
        City:request.body.City,
        Address:request.body.Address,
        Password:securePass,
        Gender:request.body.Gender
    })

    const data={
        user:{
            id:patient.id
        }
    }
    const authToken= jwt.sign(data,JWT_SECRET);
    success=true
    response.json({success,authToken})
    }
      catch(err){
        console.log(err)
        response.json({err:'email already in DB'})
    }
})

//Existing User Login Route

router.post('/signin',[body('Email').isEmail()],  async (request, response)=>{
     // checking for errors here
     let success=false;
     const errors = validationResult(request);
     if (!errors.isEmpty()) {
       return response.status(400).json({success:success, errors: errors.array() });
     }

     const {Email, Password}=request.body;
     try{
        let user=await SignUpTemplate.findOne({Email})
        if(!user){
           return response.json({success:success,error:'No user entered with this email. Please SignUp'})
        }

        const passwordcompare=await bcrypt.compare(Password,user.Password);
        if(!passwordcompare){
           return response.json({success:success, error:'Password you entered is incorrect. Please try again'})
        }

        const data={
            user:{
                id:user.id
            }
        }
        const authToken= jwt.sign(data,JWT_SECRET);
        success=true;
        response.json({success,authToken})
     }
     catch(error){
        console.log(error)
        response.status(500).json({error:'Internal server error'})
     }

}) 


//this route is used when patient filled application form for appointment on the website

router.post('/applicants',fetchuser,[body('FirstName').isLength({min: 3}),body('LastName').isLength({ min: 3 }),body('Email').isEmail(),body('PhoneNumber').isNumeric(),body('Province').isLength({ min: 3 }),body('City').isLength({ min: 3 }),body('Gender').isLength({ min: 3 }),body('Service').isLength({ min: 3 })], async (request, response)=>{
    
    let success=false;
     const errors = validationResult(request);
     if (!errors.isEmpty()) {
       return (
        response.json({success:success, errors: "Please fill all the fields" }));
     }
     try{
    const Applicants= new AppliedPatients({
        user:request.user.id,
        FirstName: request.body.FirstName,
        LastName:request.body.LastName,
        Email:request.body.Email,
        PhoneNumber:request.body.PhoneNumber,
        Province:request.body.Province,
        City:request.body.City,
        Age:request.body.Age,
        Allergy:request.body.Allergy,
        Weight:request.body.Weight,
        Pharmacy:request.body.Pharmacy,
        CurrentDoctor:request.body.CurrentDoctor,
        Gender:request.body.Gender,
        Service:request.body.Service,
        Date:request.body.Date
    })
    success=true;
    Applicants.save()
    .then(data=>{
        response.json({success,data})
    })}
    catch(err){
        response.status(500).send('internal server error')
    }
})




//Getting all the information of the loggedin user,,,,,, add fetchuser, later
router.post('/getuser',fetchuser, async (request, response)=>{
try{
     const userId=request.user.id;
    const user=await SignUpTemplate.findById(userId).select('-Password')
    response.send(user)
}
catch(error){
    console.log(error)
    response.status(500).json({error:'Internal server error'})
}})



router.get('/',(req,res)=>{
    console.log(req.body);
    res.send('Hello Khaqan')
})



//getting all users
router.route('/getData').get((req,res)=>{
    SignUpTemplate.find()
    .then(patients=>res.json(patients))
})



//sending a text
router.get('/send-text', (req,res)=>{

    client.messages.create({
        body:'Your UBL a/c 0002****6316 has been credited with PKR 200 on 07-APR-23 through Inter Bank Funds Trasfer',
        to:'+923305859181',
        from:'+14066318887'
    }).then((message)=>{console.log(message.body)}).catch(error=>{console.log(error)})

})

//deleting a user
router.get("/delete", (req,res)=>{
    SignUpTemplate.deleteMany({FullName:"Khaqan Aamir"},(err,data)=>{
        if(err){
            return(res.status(500).send(err))
        }else{
            return res.status(200).send(data)
        }
    })
})


//getting all applications

router.get("/fetchallapplications", fetchuser, async (req, res) => {
    const notes = await AppliedPatients.find({ user: req.user.id });
    res.json(notes);
  });
  

module.exports= router; 