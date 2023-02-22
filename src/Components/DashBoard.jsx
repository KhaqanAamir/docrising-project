import React from 'react'
import '../Styles/Docrising.css'
import logo from '../utils/Local Images/logo.jpeg'
import img1 from '../utils/Local Images/02.jpeg'
import img2 from '../utils/Local Images/01.jpeg'
import img3 from '../utils/Local Images/03.jpeg'
import img4 from '../utils/Local Images/04.jpeg'
import img5 from '../utils/Local Images/05.jpeg'
import img6 from '../utils/Local Images/06.jpeg'
import img7 from '../utils/Local Images/07.jpeg'
import qoute from '../utils/Local Images/quote.jpeg'
import call from '../utils/Local Images/call.jpeg'
import doc from "../utils/Local Images/Dr Umar.jpeg"
import doc1 from "../utils/Local Images/doc1.jpeg"
import doc2 from "../utils/Local Images/doc2.jpeg"
import ic1 from "../utils/Local Images/prostuff.jpeg"
import ic2 from "../utils/Local Images/affordableprices.jpeg"
import ic3 from "../utils/Local Images/integrativemed.jpeg"
import ic4 from "../utils/Local Images/ourdoctors.jpeg"
import NavBar2 from './NavBar2'
// import NavBar from './NavBar'



const DashBoard = () => {
  return (
    <>
    <div>
    <section>
      <NavBar2/>
        {/* <NavBar/> */}
        <div className="container-fluid">
            <div className="row">
            <div className="col-md-12"></div>
            <div className="about-page">
              <div className="col-md-12 banner-head1">
              <h1 className="banner-heading3">WELCOME TO DOC RISING</h1>
               <div className="para" ><p >DOC Rising always try to provide the best virtual platefrom for <br/>
                Doctor Patient and Pharmacist</p></div>
            
            </div>
            </div>
            </div>
        </div>
    </section>
    <section class ="welcome-introab">
      <div className="container-fluid">
      <div class ="row">
       <div class ="col-md-6">
         <div className="ab">
           <h5>ABOUT US</h5>
           <h2><b>We Make Relationship Between DOCTOR & Patient</b></h2>
           <h5> <i className="fa fa-user" area-hidden="true"></i> Since 2022 </h5>
           <p>We believe that DocRising’s innovation is a giant leap forward in healthcare reforms that can improve the efficiency and quality of healthcare services. This web application enables their patients to rate both their doctors and medicines, which is an intelligent way for ranking both the doctors  and the medicines in the market. Although, the patient will always be able to book an appointment anywhere anytime
</p> 
        </div>
      </div>
      <div className="col-md-6">
        <div className="abouti">
           </div>
      </div>
     </div>
    </div>
    </section>
  <div className="row">
   <div className="back-img1">
    <div className="col-md-12 banner-head" style={{textAlign: 'center'}}>
      <h6 className="banner-heading2">OUR SERVICE</h6>
      <h1> We make it simple, <br/> providing best solutions</h1>
    </div>
    </div>
  </div>
<section>
<div className="container">
  <div className="row up">
        <div className="col-md-4 ">
          <img src={img1} className="img-fluid" alt='img1'/><br/>
          <h5 className="text-center pt-2" >Online Oppointment</h5>
        </div>
      
        <div className="col-md-4">
          <img src={img2} className="img-fluid" alt='bjhb'/><br/>
          <h5 className="text-center pt-2" >Video consultation</h5>
        </div>
        <div className="col-md-4 ">
          <img src={img3} className="img-fluid"  alt='img2'/><br/>
          <h5 className="text-center pt-2" >Medical advice</h5>
        </div>
  </div>
</div>
</section>

<section>

<div className="container">
  <div className="row ">
        <div className="col-md-4 pic ">
           <img src={img4} className="img-fluid" alt='img3'/><br/>
           <h5 className="text-center pt-2" > Order Medicine Online</h5>
        </div>
  
        <div className="col-md-4 pic ">
           <img src={img5} className="img-fluid"  alt='img3'/><br/>
           <h5 className="text-center pt-2" >History</h5>
        </div>

        <div className="col-md-4 pic">
           <img src={img6} className="img-fluid"  alt='img4'/><br/>
           <h5 className="text-center pt-2" >Online Payment</h5>
        </div>
   </div>
</div>
  </section>
  <br/><br/>
  <section>
    <h3 className='h'>TEAM OF EXPERIENCED PROFESSIONALS </h3>
    <div  className="container pt-5" >
      <div class ="row text-center">
    <div class ="col-md-4">
      <h5><i className="fa fa-user" area-hidden="true"></i>
      <img src={doc} alt="doc" width="100px"/>
       <b>Dr.Umar Javed</b>
      </h5>
    </div>
     <br/> 
      <div class ="col-md-4"><h5><i className="fa fa-user" area-hidden="true">
      </i>
      <img src={doc1} alt='doc2' width="100px"/>
      <b>Dr.Sana Khan</b>
      </h5>
      </div>
      <div class ="col-md-4"><h5><i className="fa fa-user" area-hidden="true"></i>
       <img src={doc2} alt="dp" width="100px"/>
       <b>Dr.Sara Khan</b></h5>
      </div>
      </div>
  
   </div>
</section>

  <section className="pt-5" >
    <div className="container-fluid">
        <div className="row aboutback">
          <div className="col-md-6">
            <img src={img7}  alt='img5'/>

            </div>
            <div className="col-md-6">
              <div className="absec">
                <h6>PATIENT TESTIMONIALS</h6>
                <img src={qoute} alt="img6"/>
                <h1>Don’t Believe us<br/>
                  Check Client World</h1>
                <p>I have been to see Dr.Umer twice now and am very satisfied with the services provided. I have been dealing with pain for over a year now and Dr.Umar has given me great advice, new ideas for helping relieve my pain, and effective prescription. The office staff is cheerful and helpful. They have always greeted me the second I walked in and I never have to wait to check out. If you are looking for affordable high quality medical care this is a great option.</p>  
              </div>
              </div>
        </div>
    </div>
</section>

<section className="pt-5" >
      <div className="container">
          <div className="row">
              <div className="col-md-3">
                  <div className="heading">
                    <img src={ic1} alt="icon"/>
                    <h5>Professional Staff</h5>
                      <p>The doctors at Doc Rising are devoted to our patients, and we do everything within our means to provide you with the personalized care you deserve. We can diagnose and treat your disease.</p>
                  </div>
              </div>
                  <div className="col-md-3">
                    <div className="heading">
                      <img src={ic2} alt="icon"/>
                      <h5>Affordable Prices</h5>
                      <p>In today’s world, affordable health care is key optimal health.
                         Doc Rising Clinic has affordable health plans so patients don’t have to deal with pain because of expensive treatment.</p>
                    </div>
                  </div>
                  <div className="col-md-3" >
                    <div className="heading">
                      <img src={ic3} alt="logo"/>
                      <h5>Integrative Medicine</h5>
                      <p>At Doc Rising Clinic, we are committed to continued growth and knowledge, and we search relentlessly for new methods of diagnosis and treatment to address the ever-changing body</p>
                  </div>
                 </div>
                 <div className="col-md-3" >
                  <div className="heading">
                   <img src={ic4} alt="logo"/>
                   <h5>Meet Our Doctors</h5>
                   <p>The distinguished careers of our doctors have focused on integrative medicine to help patients cure: Dr.Dilawar MD, Dr. Daniels MD, Dr. Bugailiskis MD, Dr.John MD</p>
                  </div>
                 </div>
              </div>
              </div>
 </section>
   
    
    <section>
      <div className="container-fluid">
        <div className="row">
             <div className="backimg3"> 
             
                 <div className="row">
                <div className="col-md-3">
                    <div followers-row>
                      <h3>2654 </h3> 
                        <h3>HAPPY Clients</h3>
                    </div>
                </div>
                 <div className="col-md-3">
                     <div followers-row>
                         <h3>1520</h3>
                         <h3>PROJECT Done</h3>
                     </div>
                 </div>
                 <div className="col-md-3">
                     <div followers-row>
                         <h3>120</h3>
                         <h3>Award win</h3>
                     </div>
                 </div>
                 <div className="col-md-3">
                     <div followers-row>
                         <h3>3580</h3>
                         <h3>Cups Coffee</h3>
                     </div>
                 </div>
             </div>
             </div>
         </div>
     </div>
</section>
      

    <section>
          <div className="container">
          <div className="row">
            <div className="col-md-10">
              <div className="hed">
              <h1>BOOK Appointment</h1>
              <p>Doc Rising always try to provide the best virtual plateform for Patient,Doctor and Pharmacist .</p>

              </div>
            </div>

            </div>
            </div>
    </section>

  <section>
    <div className="container pt-5">
      <div className="row">
          <div className="col-md-3">
            <img src={logo}  height="80px" alt='img15'/>
            <p>Sehat Apki Faraz Hamara</p>
              <p> <b>&copy;2022 DOC-RISING Ltd. All Rights Reserved.</b> </p> 
          </div>
          <div className="col-md-3">
            <h3>Information</h3>
            <ul className="secc">
              <li>
                <a href='.'>Our Company</a>
              </li>
              <li><a href='.'>Contact Us</a></li>
                <li><a href='.'>Our Service</a></li>
              <li>
                <a href='.'>Careers</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Quick Links</h3>
           <ul className="secc">
              <li>
                <a href='.'>Facebook</a>
              </li>
              <li><a href='.'>Twitter</a></li>
                <li><a href='.'>MS TEAM</a></li>
              <li>
                <a href='.'>Instagram</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Contact</h3>
            <p>Foundation University Islamabad,Pakistan </p>
             <p> <img src={call} alt='call' height="20px"/>(+92) 3499687855</p>
          </div>
      </div>
    </div>
  </section>

    

      
    </div>
    </>
)
}

export default DashBoard