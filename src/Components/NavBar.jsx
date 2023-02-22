import React from 'react'
import IconImage from '../utils/Local Images/DocRisingIcon.jpeg';
import { Link } from 'react-router-dom';
import '../Styles/NavBar.css';

const NavBar = () => {
  return (
    <div className="main-class-nav">
      <div className="nav-flex">
        <div className="nav-left-flex">
          <img src={IconImage} alt="Logo" className='logo'/>
          <br />
           <Link className='linkss' to="/patientprofile">Home</Link>
          <div className="nav-services-div">
            <div className="dropdown">
              <Link className='dropbtn' to='/patientprofile'>Services</Link>
              <div class="dropdown-content">
                <Link to="/">ADD/ADHD Treatment</Link>
                <Link to="/">Anxiety Treatment</Link>
                <Link to="/">Depression Treatment</Link>
                <Link to="/">Insomnia Treatment</Link>
                <Link to="/">ESA Letter</Link>
              </div>
            </div>
          </div>
          <Link className='linkss' to='/patientprofile'>Blog</Link>
          <Link className='linkss' to='/patientprofile'>Contact Us</Link>
          <Link className='linkss' to='/patientprofile'>About Us</Link>
        </div>
        <div className="nav-right-flex">
          <p style={{fontWeight:'400', fontSize:'14px', marginBottom:'0'}}>(+92336-7716353)</p>
          <p style={{opacity:'0.5', fontSize:'14px', marginTop:'0'}}>team@docrising.com</p>
          <br /><br /><br />
          <button><Link style={{color:'white'}}to='/patientprofile/patient-applicationform'>Appointments</Link></button>
        </div>
      </div>
    </div>
  )
}

export default NavBar
