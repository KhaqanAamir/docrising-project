import {React,  useContext } from 'react'
import '../../Styles/Pages/Home/Welcome.css'
import  Calendar  from '../../utils/Local Images/calendar.png'
import  DoctorWallpaper  from '../../utils/Local Images/doctorwallpaper.jpeg'
import {Link} from 'react-router-dom'
import ActivePatientContext from '../../context/activepatient/ActivePatientContext'

const Welcome = () => {

  const b=useContext(ActivePatientContext)
  console.log(b.patient)

  return (
    <div className='main-div'>
        <div className='img-div'>
            <img src={DoctorWallpaper} alt="doctor wallpaper" />
        </div>
            <div className="details-div">
                <h1 style={{fontSize:'40px', marginBottom:'5px'}}>Welcome to DocRising {b.patient}</h1>
                <p style={{maxWidth:'500px', fontSize:'15px', marginTop:'0px', marginBottom:'0px'}}>Talk to licensed doctors and get professional treatment from the comfort of your home</p>
                <br />
                <img src={Calendar} alt="Calendar" /> &nbsp; &nbsp;
                <p style={{display:'inline-block', position:'relative', bottom:'2px', fontSize:'22px', fontWeight:'500'}}>By Appointment</p><br /><br />
                <button><Link style={{color:'white'}} to='/patientprofile/patient-applicationform'>Get Treatment Today</Link></button>
            </div>
    </div>
  )
}

export default Welcome