const mongoose=require('mongoose')

mongoose.set('strictQuery', false);

const PaidPts=new mongoose.Schema({
    applicants_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'applicantstable'
    }
})

const User= mongoose.model('PaidPatients', PaidPts);
module.exports = User;