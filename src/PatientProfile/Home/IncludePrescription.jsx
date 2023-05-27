import { useContext, useState,  } from "react"
import React from 'react'
import PrescriptionsContext from '../../context/prescriptions/PrescriptionsContext'

const IncludePrescription = () => {
    const [notes,setnotes]=useState({DoctorName:"", DoctorNotes:""})
    const a=useContext(PrescriptionsContext);

    const {addprescription}=a;

    const handleonchange=(e)=>{
        setnotes({...notes, [e.target.name]: e.target.value})
    }

    const handleonclick=(e)=>{
        e.preventDefault();
        addprescription(notes)
    }

    // useEffect(()=>{
    //     getprescriptions();
    // })

  return (
    <form>
  <div className="form-group">
    <label htmlFor="DoctorName">Doctor Name</label>
    <input type="text" className="form-control" id="DoctorName" aria-describedby="emailHelp" placeholder="Enter email" name="DoctorName" onChange={handleonchange}/>
  </div>
  <div className="form-group">
    <label htmlFor="DoctorNotes">Doctor Nesot</label>
    <input type="text" className="form-control" id="DoctorNotes" placeholder="Password" name="DoctorNotes" onChange={handleonchange}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleonclick}>Add Prescription</button>
</form>
  )
}

export default IncludePrescription