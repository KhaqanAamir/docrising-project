import React, {useState, useEffect} from 'react'
import '../../Styles/Pages/Home/ExperiencedDocs.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import doctoravatar from '../../utils/Local Images/doctoravatar.jpg'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

const ExperiencedDocs = () => {

  const [getdoctors,setgetdoctors]=useState([]);

  useEffect(()=>{

    const fetchdoctors=async ()=>{
    try{
      const response=await axios.get('http://localhost:4000/doctors/getdoctors');
      setgetdoctors(response.data);
    }
   catch(error){
    console.error('Error fetching anxiety treatment data:', error)
  }
};

    fetchdoctors()

  },[])

  console.log(getdoctors)
  
  localStorage.setItem('alldoctors',getdoctors)


  

  return (
    <>
    <div className='showdoctor-main-div'>
    {getdoctors.map((items)=>{
      return(
        <>
        <MDBCard>
      <MDBCardImage src={doctoravatar} position='top' alt='...' style={{height:'200px'}}/>
      <MDBCardBody>
        <MDBCardTitle>Dr. {items.name} ({items.qualification})</MDBCardTitle>
        <MDBCardText>
          {items.specialization}
        </MDBCardText>
        <MDBBtn><Link to='/Patient/ApplicationForm' style={{color:'white'}}>Book an appointment with doctor</Link></MDBBtn>
      </MDBCardBody>
    </MDBCard>
        </>
      )
    })}
    </div>
    <br /><br /><br />
    <center><button><Link to='/Patient/ApplicationForm' style={{color:'white'}}>Book an Appointment</Link></button></center>
    <br /><br /><br />
    </>
  )
}

export default ExperiencedDocs
