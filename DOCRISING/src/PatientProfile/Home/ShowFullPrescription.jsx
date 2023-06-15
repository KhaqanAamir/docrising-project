import { useEffect} from "react";
import '../../Styles/Pages/Home/ShowFullPrescription.css'

const ShowFullPrescription = ({ users, togglemodal }) => {

    useEffect(()=>{
        document.body.style.overflowY="hidden";
        return()=>{
            document.body.style.overflowY="scroll"
        }
    },[])

  return (
    <>
      <div className="modal-wrapper" onClick={togglemodal}></div>
      <div className="modal-container">
        <p>The prescription has been written by <span className="doctorname">{users.DoctorName}</span></p>
        <h3 style={{textAlign:'left'}}>Assesment Plan:</h3>
        <p style={{textAlign:'left'}}>{users.DoctorNotes}</p>
      </div>
    </>
  );
};

export default ShowFullPrescription;
