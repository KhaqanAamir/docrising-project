import {React, useEffect,useContext} from "react";
import PrescriptionsContext from '../../context/prescriptions/PrescriptionsContext'
import Prescriptionitems from "./Prescriptionitems";

const Prescription = () => {

  const a=useContext(PrescriptionsContext);

  const {getprescriptions,notes,deleteprescription}=a;

  useEffect(()=>{
    async function fetchnotes(){
    await getprescriptions()
    console.log(notes)
  }
  fetchnotes()
},[])


  return (
    <div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap',overflow:'hidden'}}>
    {notes.map((users)=>{
      return(
      <Prescriptionitems key={users._id} users= {users} deleteprescription={deleteprescription}/>
    )})}
    </div>
  );
};

export default Prescription;
