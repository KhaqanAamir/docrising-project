import {React, useState} from 'react'
import PrescriptionsContext from './PrescriptionsContext'

const PrescriptionsState=(props)=>{

const [notes,setnotes]=useState([])

    
//Add a prescription
const addprescription=async({DoctorName,DoctorNotes})=>{
        await fetch('http://localhost:4000/prescription/addprescription', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ DoctorName: DoctorName, DoctorNotes: DoctorNotes }),
      });

}


//Get prescriptions
const getprescriptions=async()=>{
    const called=await fetch('http://localhost:4000/prescription/fetchallprescriptions', {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        }
      });

      const allprescriptions= await called.json()
       setnotes(allprescriptions)
}

const deleteprescription=async(id)=>{
  console.log(id)
}
    
    return(

        <PrescriptionsContext.Provider value={{notes,addprescription, getprescriptions, deleteprescription}}>
            {props.children}
        </PrescriptionsContext.Provider>
    
        )   
}

export default PrescriptionsState;