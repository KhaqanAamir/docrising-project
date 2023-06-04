const mongoose=require('mongoose')

mongoose.set('strictQuery', false);

const DoctorModel=new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    qualification:{
        type: String,
        required: true
    },
    specialization:{
        type: String,
        required: true
    },
    phoneNo:{
        type: Number,
        required: true
    },
    rating:{
        type: Number
    },
    date:{
        type: Date,
        default: Date.now
    },
    UnAvTime:{
        type: [Date]
    }
   
})

// module.exports=mongoose.model('doctorsuserdata', DoctorModel)

const User= mongoose.model('DoctorsUserData', DoctorModel);
// User.createIndexes();
module.exports = User;