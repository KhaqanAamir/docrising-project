const mongoose=require('mongoose')

mongoose.set('strictQuery', false);

const SignUpTemplate=new mongoose.Schema({
    FullName:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
        // unique:true
    },
    PhoneNumber:{
        type:String,
        required:true
    },
    City:{
        type:String,
        required:true
    },
    Address:{
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

const User= mongoose.model('patienttable', SignUpTemplate);
// User.createIndexes();
module.exports = User;