import {React, useEffect,useContext} from "react";
import PrescriptionsContext from '../../context/prescriptions/PrescriptionsContext'
import Prescriptionitems from "./Prescriptionitems";

const Prescription = () => {

  const a=useContext(PrescriptionsContext);

  const {getprescriptions,notes}=a;

  useEffect(()=>{
    async function fetchnotes(){
    await getprescriptions()
  }
  fetchnotes()
},[])


  return (
    <div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap',overflow:'hidden'}}>
    {notes.map((users)=>{
      return(
      <Prescriptionitems key={users._id} users= {users}/>
    )})}
    </div>
  );
};

export default Prescription;
