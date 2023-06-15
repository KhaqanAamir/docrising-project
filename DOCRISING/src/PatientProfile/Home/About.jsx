import React from 'react'
import '../../Styles/Pages/Home/About.css'
import NavBar2 from '../../Components/NavBar2'
import Footer from '../../Components/Footer'

const About = () => {
  return (
    <>
    <NavBar2/>
    <div className="about-us-container">
      <div className="about-us-section">
        <h1 className="section-title">About Our Organization</h1>
        <p className="section-description">
        At DocRising, we understand the challenges faced by individuals when it comes to accessing timely medical care. With our user-friendly website and mobile application, patients can easily search for doctors, view their profiles, and book appointments at their preferred time slots. We prioritize patient convenience and strive to simplify the entire appointment booking process.
        </p>
        <p className="section-description">
          We take pride in our extensive network of highly qualified and experienced healthcare professionals who are dedicated to delivering exceptional care to our patients. By partnering with reputed hospitals, clinics, and individual practitioners, we ensure that our users have access to a wide range of healthcare options.        
        </p>
        <p className="section-description">
          Our organization is committed to utilizing cutting-edge technology and innovation to drive positive change in the healthcare industry. By leveraging the power of digital solutions, we strive to improve healthcare outcomes and empower individuals to take control of their health.        
        </p>
        <p className="section-description">
         With a strong focus on customer satisfaction, we are continuously evolving and enhancing our services to meet the dynamic needs of patients and healthcare providers. At DocRising, we believe in the transformative potential of technology to reshape healthcare delivery and make a meaningful impact on people's lives.
        </p>
      </div>

      <div className="about-us-section">
        <h2 className="section-title">Our Vision</h2>
        <p className="section-description">
          We envision a world where geographical barriers no longer limit access to quality healthcare. Through our online doctor appointment system, we aim to break down these barriers, providing individuals with a platform to effortlessly find and book appointments with doctors of their choice, regardless of their location.
        </p>
        <p className="section-description">
          Furthermore, we are dedicated to enhancing the overall healthcare experience by prioritizing patient satisfaction and convenience. Our vision includes ensuring that patients have a seamless and user-friendly interface to navigate through the appointment booking process, access medical records, and receive timely reminders for their appointments.
        </p>
      </div>
      <div className="about-us-section">
        <h2 className="section-title">Our Mission</h2>
        <p className="section-description">         
           Our primary mission is to simplify the process of finding and booking appointments with healthcare professionals. Through our platform, we aim to offer a vast network of doctors across various specialties, enabling patients to easily search, compare, and choose the right healthcare provider based on their unique needs and preferences.
        </p>
        <p className="section-description">
          At DocRising, our mission is to provide a comprehensive and user-friendly online doctor appointment system that empowers individuals to take control of their healthcare journey. We are committed to bridging the gap between patients and healthcare providers, making access to quality medical care more convenient, efficient, and transparent
        </p>
      </div>
      <div className="about-us-section">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-description">
          <span><h4>Name: </h4>DocRising</span>
        </p>
        <p className="section-description">
          <span><h4>Email: </h4>team@docrising.com</span>
        </p>
        <p className="section-description">
          <span><h4>Phone Number:</h4> 0330-5859181</span>
        </p>
      </div>
    </div> 
        <Footer/>
    </>
    )
}

export default About