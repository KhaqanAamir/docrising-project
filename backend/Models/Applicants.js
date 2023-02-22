const mongoose=require('mongoose')

const AppliedPatients=new mongoose.Schema({
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    PhoneNumber:{
        type:Number,
        required:true
    },
    Province:{
        type:String,
        required:true
    },
    City:{
        type:String,
        required:true
    },
    Gender:{
        type:String,
        required:true
    },
    Service:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('applicantstable', AppliedPatients)