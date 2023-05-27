import { useContext, useState, useEffect, useRef } from "react";
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
import img from "../../utils/banner.jpeg";

import ActivePatientContext from "../../context/activepatient/ActivePatientContext";
import Prescription from "./Prescription";
import IncludePrescription from "./IncludePrescription";
import PrescriptionsState from "../../context/prescriptions/PrescriptionsState";

const PatientProfile = () => {
  const hiddenFileInput = useRef(null);
  const b = useContext(ActivePatientContext);
  const { patient, activepatient } = b;
  useEffect(() => {
    activepatient(JSON.parse(localStorage.getItem("activepatientdetails")));
    console.log(patient);
  }, []);

  const [displayallprescriptions, setdisplayallprescriptions] = useState(false);
  const [image, setimage] = useState("");

  const showprescriptions = (event) => {
    event.preventDefault();
    setdisplayallprescriptions(!displayallprescriptions);
  };

  const handleImageClick = () => {
    hiddenFileInput.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setimage(file);
  };

  return (
    <>
      <PrescriptionsState>
        <section style={{ backgroundColor: "#eee" }}>
          <MDBContainer className="py-5">
            <MDBRow>
              <MDBCol lg="4">
                <MDBCard className="mb-4">
                  <MDBCardBody className="text-center">
                    <div
                      onClick={handleImageClick}
                      style={{ cursor: "pointer" }}
                    >
                      {image ? (
                        <img
                          src={URL.createObjectURL(image)}
                          alt="upload images"
                          className="img-display-after"
                        />
                      ) : (
                        <img
                          src={img}
                          alt="upload images"
                          className="img-display-before"
                        />
                      )}

                      <input
                        id="image-upload-input"
                        type="file"
                        onChange={handleImageChange}
                        ref={hiddenFileInput}
                        style={{ display: "none" }}
                      />
                    </div>
                        
                    <p className="text-muted mb-1">{patient.FullName}</p>
                    <p className="text-muted mb-4">{patient.City}</p>
                    
                   <button>Edit Profile</button>


                  </MDBCardBody>
                </MDBCard>

                <MDBCard className="mb-4 mb-lg-0">
                  <MDBCardBody className="p-0">
                    <MDBListGroup flush className="rounded-3">
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <i class="fas fa-hat-wizard"></i>
                        <MDBCardText className="text-muted">Age:</MDBCardText>
                      </MDBListGroupItem>
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <i class="fas fa-lungs-virus"></i>

                        <MDBCardText className="text-muted">
                          Allergies:
                        </MDBCardText>
                      </MDBListGroupItem>
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <i class="fas fa-person"></i>

                        <MDBCardText className="text-muted">
                          Weight:
                        </MDBCardText>
                      </MDBListGroupItem>
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <i class="fas fa-hospital"></i>

                        <MDBCardText className="text-muted">
                          Pharmacy you want:
                        </MDBCardText>
                      </MDBListGroupItem>
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <i class="fas fa-user-doctor"></i>

                        <MDBCardText className="text-muted">
                          Current Doctor:
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
