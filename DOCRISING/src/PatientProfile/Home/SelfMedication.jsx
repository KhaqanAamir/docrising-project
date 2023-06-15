import React, {useEffect,useState} from 'react'
import axios from 'axios'
import NavBar2 from '../../Components/NavBar2'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer';

const SelfMedication = () => {

  const [allprescriptions,setallprescriptions]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:4000/prescription/getallprescriptions')
    .then(response=>{
      setallprescriptions(response.data)
    })
    
  },[])

  console.log(allprescriptions)


  return (
    <div>
    <NavBar2/>
    <br />
    <div style={{display:'flex', justifyContent:'space-evenly', flexWrap:'wrap'}}>
    {allprescriptions.map((users)=>{
      if(users.Service==='Anxiety'){
        return( 
      <MDBCard style={{backgroundColor:'grey' ,width:'fit-content', margin:'5px'}}>
      <MDBCardBody>
        <MDBCardTitle>{users.Service}</MDBCardTitle>
        <MDBCardText style={{color:'white'}}>
          {users.DoctorNotes}
        </MDBCardText>
        <Link to='/patientprofile/patient-applicationform'><MDBBtn>Click here to book appointment</MDBBtn></Link>
      </MDBCardBody>
    </MDBCard>
        )}
      else{
        return( 
      <MDBCard style={{backgroundColor:'rgb(200, 166, 166)' ,width:'fit-content', margin:'5px'}}>
      <MDBCardBody>
        <MDBCardTitle>{users.Service}</MDBCardTitle>
        <MDBCardText style={{color:'white'}}>
          {users.DoctorNotes}
        </MDBCardText>
        <Link to='/patientprofile/patient-applicationform'><MDBBtn>Click here to book appointment</MDBBtn></Link>
      </MDBCardBody>
    </MDBCard>
        )
      }
    })}
    </div>
    <Footer/>
    </div>
  )
}

export default SelfMedication