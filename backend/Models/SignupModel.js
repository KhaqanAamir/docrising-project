const mongoose=require('mongoose')

const SignUpTemplate=new mongoose.Schema({
    FullName:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    City:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    Gender:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('patienttable', SignUpTemplate);