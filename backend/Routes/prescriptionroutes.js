const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const prescriptions = require("../Models/RXModel");
const { body, validationResult } = require("express-validator");

router.post(
  "/addprescription",
  fetchuser,
  [
    body("DoctorName").isLength({ min: 3 }),
    body("DoctorNotes").isLength({ min: 10 }),
  ],
  async (req, res) => {
    try {
    //   const { DoctorName, DoctorNotes } = req.body;
      let success = false;
      // checking for errors here
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
      }

      const note = new prescriptions({
        user: req.user.id,
        DoctorName:req.body.DoctorName,
        DoctorNotes:req.body.DoctorNotes
      });
      // console.log(populate({}))
      const savednote = await note.save();
      res.json(savednote);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);



router.put(
  "/updateprescription/:id",
  fetchuser,
  [
    body("DoctorName").isLength({ min: 3 }),
    body("DoctorNotes").isLength({ min: 10 }),
  ],
  async (req, res) => {
    const {DoctorName,DoctorNotes}=req.body;
    try{
    let newnote={};
    if(DoctorName){newnote.DoctorName=DoctorName}
    if(DoctorNotes){newnote.DoctorNotes=DoctorNotes}

    let note=await prescriptions.findById(req.params.id)
    if(!note){return res.status(404).send("Not found")}

    if(note.user.toString() !== req.user.id){
      return res.status(401).send("Not allowed")
    }

    note=await prescriptions.findByIdAndUpdate(req.params.id, {$set:newnote}, {new:true}).populate('user')
    res.json({note})
  }
  catch(error){
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }


  }
)


router.delete(
  "/deleteprescription/:id",
  fetchuser,
  async (req, res) => {
    try{
    let note=await prescriptions.findById(req.params.id)
    if(!note){return res.status(404).send("Not found")}

    if(note.user.toString() !== req.user.id){
      return res.status(401).send("Not allowed")
    }

    note=await prescriptions.findByIdAndDelete(req.params.id)
    res.send("deleted")
  }
  catch(error){
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }

  }
)


router.get("/fetchallprescriptions", fetchuser, async (req, res) => {
  const notes = await prescriptions.find({ user: req.user.id });
  res.json(notes);
});

module.exports = router;
