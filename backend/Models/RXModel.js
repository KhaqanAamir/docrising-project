const mongoose=require('mongoose')

mongoose.set('strictQuery', false);

const prescriptionmodel=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'patienttable'
    },
    DoctorName:{
        type:String,
        required:true
    },
    DoctorNotes:{
        type:String,
        required:true
        // unique:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const User= mongoose.model('prescription', prescriptionmodel);
// User.createIndexes();
module.exports = User;