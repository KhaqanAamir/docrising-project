import React, {useState, useEffect} from 'react'
import '../../Styles/Pages/Home/ExperiencedDocs.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Spinner from "react-bootstrap/Spinner"
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

    // console.log(getdoctors)
  },[])

  console.log(getdoctors)


  if (!getdoctors) {
    return (
      <div  style={{position:'fixed',left:'45%', top:'30%'}}>
          <div>
            <h1 className="formTitleLink">DocRising</h1>
          </div>
          <div>
            <center>
            <Spinner animation="border" variant="primary" />
            </center>
          </div>
      </div>
    );
  }

  else{

  return (
    <>
    <MDBCard>
      <MDBCardImage src={doctoravatar} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    <center><button><Link to='/patientprofile/patient-applicationform' style={{color:'white'}}>Book an Appointment</Link></button></center>
    <br /><br /><br />
    </>
  )
}
}

export default ExperiencedDocs
