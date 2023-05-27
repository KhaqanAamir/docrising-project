import React, { useState } from 'react'
import '../../Styles/Pages/Home/Prescriptionitems.css'
import ShowFullPrescription from './ShowFullPrescription';

const Prescriptionitems = (props) => {

  const [showModal,setshowModal]=useState(false)
    const {users}=props;

    const togglemodal=()=>{
      setshowModal(!showModal)
    }

  return (
    <div className="maincard">
        <div className="cardcards" style={{ margin:'1em' }}>
          <div className="cardbody">
            <p>{users.date}</p>
            <h5 className="cardtitle">{users.DoctorName}</h5>
            <p className="cardtext" title={users.DoctorNotes}>
              {users.DoctorNotes}
            </p>
            <i class="fa-solid fa-trash-can fa-xl"></i>&nbsp;&nbsp;&nbsp;&nbsp;
            <i class="fa-solid fa-eye fa-xl" onClick={togglemodal}></i>
          </div>
        </div>
      {showModal && <ShowFullPrescription users={users} togglemodal={togglemodal}/>}
    </div>
  )
}

export default Prescriptionitems