import React from 'react'
import '../Styles/NavBar2.css'
import icon from '../utils/Local Images/DocRisingIcon.jpeg'
import { Link } from 'react-router-dom'

const NavBar2 = () => {
  return (
    <nav>
        <div className="left-nav-div">
            <ul>
                <li><img src={icon} alt="icon" height='50em'/></li>
                <li><Link className='linkss' to="/patientprofile">Home</Link></li>
                <li><div className="dropdown">
              <Link className='dropbtn' to='/patientprofile'>Services</Link>
              <div class="dropdown-content">
                <Link to="/">ADD/ADHD Treatment</Link>
                <Link to="/">Anxiety Treatment</Link>
                <Link to="/">Depression Treatment</Link>
                <Link to="/">Insomnia Treatment</Link>
                <Link to="/">ESA Letter</Link>
              </div>
              </div>
              </li>
                <li><Link className='linkss' to='/patientprofile'>Contact Us</Link></li>
                <li><Link className='linkss' to='/patientprofile'>About Us</Link></li>
            </ul>
        </div>
        <div className="right-nav-div">
            <ul>
                <li><Link to='/patient/SignUp'>SignUp/LogIn</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar2