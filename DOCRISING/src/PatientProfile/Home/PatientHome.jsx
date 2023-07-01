import React ,{useContext, useEffect} from 'react'
import NavBar2 from '../../Components/NavBar2'
import Welcome from './Welcome'
import Services from './Services'
import Insurances from './Insurances'
import ExperiencedDocs from './ExperiencedDocs'
import Footer from '../../Components/Footer'
import Spinner from "react-bootstrap/Spinner"
import GetAllDoctorsContext from '../../context/doctor/GetAllDoctorsContext'

const PatientHome = () => {

  const b=useContext(GetAllDoctorsContext)
  const {getdoctorsdata, getdoctors}=b;


  useEffect(()=>{
    getdoctorsdata()
  },[])
  
  if (!localStorage.getItem("activepatientdetails")) {
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
     <NavBar2/>   
      <Welcome/>
     <Services/>
     <Insurances/>
     {getdoctors&& <ExperiencedDocs getdoctors={getdoctors} />}
     <Footer/>
     </>
  )
}
}


export default PatientHome