const mongoose=require('mongoose')

const AppliedPatients=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'patienttable'
    },
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
    },
    Age:{
        type:String,
        required:true
    },
    Allergy:{
        type:String,
        required:true
    },
    Weight:{
        type:String,
        required:true
    },
    Pharmacy:{
        type:String,
        required:true
    },
    CurrentDoctor:{
        type:String,
        required:true
    },
    Date:{
        type:String,
        required: true
    }
})

module.exports=mongoose.model('applicantstable', AppliedPatients)