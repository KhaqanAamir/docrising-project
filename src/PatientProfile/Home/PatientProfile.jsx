import { useContext, useState, useEffect } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import "../../Styles/Pages/Home/PatientProfile.css";
import axios from 'axios';

import ActivePatientContext from "../../context/activepatient/ActivePatientContext";
import Prescription from "./Prescription";
import IncludePrescription from "./IncludePrescription";
import PrescriptionsState from "../../context/prescriptions/PrescriptionsState";
import Spinner from "react-bootstrap/Spinner"
import NavBar2 from "../../Components/NavBar2";


const PatientProfile = () => {
  const b = useContext(ActivePatientContext);
  const { patient, activepatient } = b;
  const [allapplications,setallapplications]=useState('');
  const [count, setCount] = useState(0);
  const lastindex=allapplications.length - 1;

    useEffect(() => {
    activepatient(JSON.parse(localStorage.getItem("activepatientdetails")));
    
      async function fetchnotes(){
       await axios.get('http://localhost:4000/user/fetchallapplications', {
        headers: {
      // Overwrite Axios's automatically set Content-Type
      'Content-Type': 'application/json',
      'auth-token': localStorage.getItem('token')
    }
  }).then (res=>{
    // if (count < 2) {
      // run the effect
      setCount(count + 1);
    setallapplications(res.data)
    console.log(allapplications)
      })}
    fetchnotes()
  },[]);



  const [displayallprescriptions, setdisplayallprescriptions] = useState(false);

  if (!allapplications) {
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
  const showprescriptions = (event) => {
    event.preventDefault();
    setdisplayallprescriptions(!displayallprescriptions);
  };

  

  return (
    <>
    <NavBar2/>
      <PrescriptionsState>
        <section style={{ backgroundColor: "#eee" }}>
          <MDBContainer className="py-5">
            <MDBRow>
              <MDBCol lg="4">
                <MDBCard className="mb-4">
                  <MDBCardBody className="text-center">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                  className="rounded-circle img-fluid" style={{width: '150px'}}/>
                    
                    <p className="text-muted mb-1">{patient.FullName}</p>
                    <p className="text-muted mb-4">{patient.City}</p>
                 
                  </MDBCardBody>
                </MDBCard>

                <MDBCard className="mb-4 mb-lg-0">
                  <MDBCardBody className="p-0">
                    <MDBListGroup flush className="rounded-3">
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <i class="fas fa-hat-wizard"></i>
                        <MDBCardText className="text-muted">
                        {allapplications? <p>Age: {allapplications[lastindex].Age}</p> :<p>empty</p>}
                        </MDBCardText>
                      </MDBListGroupItem>
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <i class="fas fa-lungs-virus"></i>

                        <MDBCardText className="text-muted">
                        {allapplications? <p>Allergies: {allapplications[lastindex].Allergy}</p> :<p>empty</p>}
                        </MDBCardText>
                      </MDBListGroupItem>
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <i class="fas fa-person"></i>

                        <MDBCardText className="text-muted">
                        {allapplications? <p>Weight: {allapplications[lastindex].Weight}</p> :<p>empty</p>}
                        </MDBCardText>
                      </MDBListGroupItem>
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <i class="fas fa-hospital"></i>

                        <MDBCardText className="text-muted">
                        {allapplications? <p>Pharmacy you want:{allapplications[lastindex].Pharmacy}</p> :<p>empty</p>}
                        </MDBCardText>
                      </MDBListGroupItem>
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <i class="fas fa-user-doctor"></i>

                        <MDBCardText className="text-muted">
                          {allapplications? <p>Current Doctor:{allapplications[lastindex].CurrentDoctor}</p> :<p>empty</p>}
                        </MDBCardText>
                      </MDBListGroupItem>
                    </MDBListGroup>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol lg="8">
                <MDBCard className="mb-4">
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText style={{ width: "max-content" }}>
                          Full Name:
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          {patient.FullName}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Email</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          {patient.Email}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Phone</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          {patient.PhoneNumber}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Mobile</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          {patient.PhoneNumber}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText style={{ width: "max-content" }}>
                          Address
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          {patient.Address}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>

                <MDBRow>
                  <MDBCol md="12">
                    <MDBCard className="mb-4 mb-md-0">
                      <MDBCardBody>
                        <MDBCardText className="mb-4">
                          <span className="text-primary font-italic me-1">
                            Total number of prescriptions
                          </span>
                        </MDBCardText>
                        <MDBCardText
                          className="mb-1"
                          style={{ fontSize: "1.5rem" }}
                        >
                          You don't have any prescriptions yet
                        </MDBCardText>{" "}
                        <br />
                        <button onClick={showprescriptions}>
                          Show Prescriptions
                        </button>{" "}
                        <br />
                        <br />
                        <br />
                        {displayallprescriptions && <Prescription />}
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <IncludePrescription />
      </PrescriptionsState>
    </>
  );
};

export default PatientProfile;
