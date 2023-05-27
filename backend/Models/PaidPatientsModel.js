const mongoose=require('mongoose')

mongoose.set('strictQuery', false);

const PaidPts=new mongoose.Schema({
    FullName:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
        // unique:true
    },
    Address:{
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
    State:{
        type:String,
        required:true
    },
    Zipcode:{
        type:Number,
        required:true
    },
    NameOnCard:{
        type:String,
        required:true
    },
    CreditCardNumber:{
        type:String,
        required:true
    },
    ExpMonth:{
        type:String,
        required:true
    },
    ExpYear:{
        type:String,
        required:true
    },
    CVV:{
        type:String,
        required:true
    }
})

const User= mongoose.model('PaidPatients', PaidPts);
module.exports = User;