import {React, useState} from 'react'
import PrescriptionsContext from './PrescriptionsContext'

const PrescriptionsState=(props)=>{

const [notes,setnotes]=useState([])
const[patientfirstname,setpatientfirstname]=useState('')

    
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


//Get prescriptions by name
const getprescriptions=async()=>{
  console.log(patientfirstname)
    const called=await fetch('http://localhost:4000/prescription/fetchallprescriptionsbyname', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ FirstName: localStorage.getItem("firstname") }),
      });

      const allprescriptions= await called.json()
       setnotes(allprescriptions)
}

const deleteprescription=async(id)=>{
  console.log(id)
}
    
    return(

        <PrescriptionsContext.Provider value={{notes,addprescription, getprescriptions, deleteprescription, setpatientfirstname}}>
            {props.children}
        </PrescriptionsContext.Provider>
    
        )   
}

export default PrescriptionsState;