import React from 'react'
import '../../Styles/Pages/Home/ExperiencedDocs.css'
import crush1 from '../../utils/Local Images/crush1.png'
import crush2 from '../../utils/Local Images/crush2.png'
import { Link } from 'react-router-dom'

const ExperiencedDocs = () => {
  return (
    <>
    <h5 style={{textAlign:'center'}}>Team of Experienced Professionals</h5><br />
    <div className='main-div-exp'>
      <div className='main-div-exp-docs'>
        <img src={crush1} alt="doc1" />
        <h5>Sonia Mookherjea</h5>
        <span>Physician Assistant</span>
      </div>
      <div>
        <img src={crush2} alt="doc1" />
        <h5>Kashif Afraz</h5>
        <span>MBBS Muna Bhai</span>
      </div>
    </div>
    <center><button><Link to='/patientprofile/patient-applicationform' style={{color:'white'}}>Book an Appointment</Link></button></center><br /><br /><br />
    </>
  )
}

export default ExperiencedDocs
