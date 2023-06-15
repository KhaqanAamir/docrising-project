import React from 'react'
import '../../Styles/Pages/Home/Insurances.css'
import Jubilee from '../../utils/Local Images/Jubilee_Life_logo.png'
import EFU from '../../utils/Local Images/EFU.png'
import staff from '../../utils/Local Images/staff.jpg'
import money from '../../utils/Local Images/money.jpg'
import machine from '../../utils/Local Images/machine.jpg'
import doctor from '../../utils/Local Images/doctor.png'

const Insurances = () => {
  return (
    <>
    <div className='Insurance-main-div'>
     <h5>DocRising Insurance Providers</h5> 
     <p>EZCare insurance services are available now! Use your Tricare, Humana, or AETNA insurance for online mental health help. No need to delay your appointment, the perfect time has come!   
     </p>
     <img src={Jubilee} alt="jubilee" style={{width:'10%'}} />
     <img src={EFU} alt="efu" style={{width:'10%', height:'60px'}}/>
    </div><br />
    <div className="container">
      <p style={{fontSize:'13px',fontWeight:'500'}}>Find the help you need to restore your health and wellbeing.</p>
      <p style={{fontSize:'10px'}}>Hormone imbalances, stress, anxiety, depression, ADHD/ADD treatment and diagnosis, emotional support animal, and weight loss challenges are the medical conditions that become challenges for our daily lives, cure or prevent any disease with help of our doctors. At EZCare Medical Clinic, we believe the best solution to restore our patient’s health and vitality is through integrative medicine. Integrative medicine involves conventional medicines, hormonal balancing, and nutrition, lifestyle, and behavior modification. The professional staff at EZCare Clinic is dedicated to providing patients with a comfortable, non-judgmental environment to receive medical treatment and cure or prevent any disease.</p>
    </div>
    <div className='container information'>
      <div className='docrisinginfo'>
        <img src={staff} alt="staff" /> <br />
        <h4 style={{fontSize:'17px'}}>Professional Staff</h4>
        <p style={{fontSize:'12px'}}>The doctors at EZCare are devoted to our patients, and we do everything within our means to provide you with the personalized care you deserve. We can diagnose and treat your disease and help with emotional support animal letter</p>
      </div>
      <div className='docrisinginfo' style={{backgroundColor:'rgb(96, 210, 214)'}}>
        <img src={money} alt="staff" /> <br />
        <h4 style={{fontSize:'17px'}}>Affordable Prices</h4>
        <p style={{fontSize:'12px'}}>In today’s world, affordable health care is key optimal health. EZCare Clinic has affordable health plans so patients don’t have to deal with pain because of expensive treatment</p>
      </div>
      <div className='docrisinginfo' style={{backgroundColor:'rgb(94, 197, 200)', minWidth:'35%'}}>
        <img src={machine} alt="staff" /> <br />
        <h4 style={{fontSize:'17px'}}>Integrative Medicine</h4>
        <p style={{fontSize:'12px'}}>At EZCare Clinic, we are committed to continued growth and knowledge, and we search relentlessly for new methods of diagnosis and treatment to address the ever-changing body</p>
      </div>
      <div className='docrisinginfo' style={{backgroundColor:'rgb(76, 162, 165)'}}>
        <img src={doctor} alt="staff" /> <br />
        <h4 style={{fontSize:'17px'}}>Meet Our Doctors</h4>
        <p style={{fontSize:'12px'}}>The distinguished careers of our doctors have focused on integrative medicine to help patients cure: Dr. Dowbak MD, Dr. Daniels MD, Dr. Bugailiskis MD, Dr. Boudreau MD</p>
      </div>
    </div><br />

    </>
  )
}

export default Insurances
