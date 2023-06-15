import React from 'react'
import '../Styles/NavBar2.css'
import icon from '../utils/Local Images/DocRisingIcon.jpeg'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion';
// import About from '../PatientProfile/Home/About';


const NavBar2 = () => {

  let history = useNavigate();

  const handlelogout=()=>{
    localStorage.clear();
    history('/patient/SignIn')
  }

  function changetoProfile(){
    if(!localStorage.getItem('token')){
      history('/patient/SignUp');
      return <li><Link to='/patient/SignUp'>SignUp</Link>&nbsp;&nbsp;&nbsp; <Link to='/patient/SignIn'>SignIn</Link></li>;
    }
    else{
      // history('/patient/Home');
      return <li><Link to='/Patient/Profile'>My Profile</Link>&nbsp;&nbsp;&nbsp; <button onClick={handlelogout}>LogOut</button></li>;
    }
  }
  return (
    <nav>
        <div className="left-nav-div">
            <ul className='nav-main-list'>
                <li><img src={icon} alt="icon" height='50em'/></li>
                <motion.li whileHover={{scale:1.5, margin:'0px 40px'}}><Link className='linkss' to="/patient/Home">Home</Link></motion.li>
                <motion.li whileHover={{scale:1.5, margin:'0px 40px'}}><div className="dropdown">
              <Link className='dropbtn' to='/patient/Home'>Services</Link>
              <div className="dropdown-content">
                <Link to="/Patient/Services/ADHD">ADD/ADHD Treatment</Link>
                <Link to="/Patient/Services/Anxiety">Anxiety Treatment</Link>
              </div>
              </div>
              </motion.li>
                <motion.li whileHover={{scale:1.5, margin:'0px 40px'}}><Link className='linkss' to='/About'>About Us</Link></motion.li>
                <motion.li whileHover={{scale:1.5, margin:'0px 40px'}}><Link className='linkss' to='/patient/SelfMedication'>Self Medication</Link></motion.li>
            </ul>
        </div>
        <div className="right-nav-div">
            <ul>
                {changetoProfile()}
            </ul>
        </div>
    </nav>
  )
}

export default NavBar2