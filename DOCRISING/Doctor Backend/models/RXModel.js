const mongoose=require('mongoose')

mongoose.set('strictQuery', false);

const prescriptionmodel=new mongoose.Schema({
    FirstName:{
        type:String,
        required:true
    },
    Service:{
        type:String,
        required:true
    },
    DoctorNotes:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const User= mongoose.model('prescription', prescriptionmodel);
// User.createIndexes();
module.exports = User;