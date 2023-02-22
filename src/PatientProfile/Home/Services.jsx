import React from 'react'
import '../../Styles/Pages/Home/Services.css'
// import  DoctorWallpaper  from '../../utils/Local Images/doctorwallpaper.jpeg'
import ADHD from '../../utils/Local Images/ADHD.jpg'
import Anxiety from '../../utils/Local Images/Anxiety.jpeg'
import Depression from '../../utils/Local Images/Depression.jpeg'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <>
    <br />
    <h5 style={{textAlign:'center'}}>Our Services</h5><br />

    <div id="carouselExampleAutoplaying" className="carousel slide services-images" data-bs-ride="carousel">
      <div className="carousel-inner">
    <div className="carousel-item active sliderimages">
      <div className='card'><br />
        <img src={Anxiety} className="d-block w-100" alt="..."/>
        <h5>Anxiety</h5>
        <p>Anxiety disorders are a type of mental health condition. Anxiety makes it difficult to get through your day. Symptoms include feelings of nervousness, panic and fear as well as sweating and a rapid heartbeat. Treatments include medications and cognitive behavioral therapy.</p>
      </div>
    </div>
    <div className="carousel-item sliderimages">
    <div className='card'><br />
        <img src={ADHD} className="d-block w-100" alt="..."/>
        <h5>ADHD/ADD</h5>
        <p>ADHD is one of the most common neurodevelopmental disorders of childhood. It is usually first diagnosed in childhood and often lasts into adulthood. Children with ADHD may have trouble paying attention, controlling impulsive behaviors (may act without thinking about what the result will be), or be overly active</p>
      </div>
    </div>
    <div className="carousel-item sliderimages">
    <div className='card'><br />
        <img src={Depression} className="d-block w-100" alt="..."/>
        <h5>Depression Treatment</h5>
        <p>Depression is a common illness worldwide, with an estimated 3.8% of the population affected, including 5.0% among adults and 5.7% among adults older than 60 years (1). Approximately 280 million people in the world have depression</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev prevbtn" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next prevbtn" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  </div>
  <div className='afterslider'>
    <p>Let's connect you with a licensed doctor</p>
    <button><Link style={{color:'white'}} to='/patientprofile/patient-applicationform'>Start Today</Link></button>
  </div>
</>
  )
}

export default Services