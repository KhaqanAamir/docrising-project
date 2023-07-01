const express=require('express')
const router=express.Router()
const DoctorModel=require('../Models/DoctorModel')


router.get('/getdoctors',async (req,res)=>{
    try{
    DoctorModel.find()
    .then(doctors=>res.json(doctors))
    }
    catch(error){
        res.status(500).send("Internal server erro")
    }
})

const availability = [];

router.post('/availability', (req, res) => {
    const { doctor_id, start_time, end_time } = req.body;
  
    // Add the availability to the database
    availability.push({ doctor_id, start_time, end_time });
  
    res.json({ message: 'Availability added successfully' });
  });

  // Endpoint to retrieve availability for the current day
router.get('/availability', (req, res) => {
    // Retrieve the available time slots for the current day
    // You'll need to implement the logic to filter the available slots for today
  
    // For demonstration purposes, let's assume the availability for today is pre-defined
    const todayAvailability = [
      { start_time: '3:00 PM', end_time: '5:00 PM' },
      { start_time: '6:00 PM', end_time: '8:00 PM' },
      { start_time: '9:00 PM', end_time: '11:00 PM' }
    ];
  
    res.json(todayAvailability);
  });


module.exports = router;