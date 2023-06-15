const express = require("express");
const router = express.Router();
const prescriptions = require("../models/RXModel");

router.post(
    "/addprescription",
    async (req, res) => {
      try {
        const note = new prescriptions({
          FirstName: req.body.FirstName,
          Service: req.body.Service,
          DoctorNotes:req.body.DoctorNotes,
        });
        const savednote = await note.save();
        res.json(savednote);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
      }
    }
  );

  module.exports=router;

