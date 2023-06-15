import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import "../styles/Prescription.css";

function Appointments() {
  const [Appointments, setAppointments] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [prescriptionData, setPrescriptionData] = useState({
    patientName: "",
    FirstName: "",
    Service: "",
    DoctorNotes: "",
  });

  let docid = localStorage.getItem("docid");
  let i = 1;
  const navigate = useNavigate();

  //   const [showPrescription, setShowPrescription] = useState(false);
  //   const handleButtonClick = () => {
  //     setShowPrescription(true);
  //   };

  const CompleteApp = async (event, appid) => {
    const response = await axios.put(
      `http://localhost:5000/api/appointments/completeapp/${appid}`,

      {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          "Content-Type": "application/json",
        },
      }
    );
    //window.location.reload(true);
    navigate("/Appointments");
  };

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPrescriptionData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Do something with the prescription data
    console.log("Prescription data:", prescriptionData);
    setPrescriptionData({
      patientName: "",
      FirstName: "",
      DoctorNotes: "",
      Service: "",
    });

    // axios.post("http://localhost:5000/api/prescription/addprescription")
    const response = await fetch(
      "http://localhost:5000/api/prescription/addprescription",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          FirstName: prescriptionData.FirstName,
          Service: prescriptionData.Service,
          DoctorNotes: prescriptionData.DoctorNotes,
        }),
      }
    );
    const json = await response.json();
    console.log(json);

    setModalIsOpen(false);
  };

  useEffect(() => {
    async function fetchApp() {
      const response = await axios.post(
        "http://localhost:5000/api/appointments/getAppAppointments",
        {
          docid: docid,
        },
        {
          headers: {
            // Overwrite Axios's automatically set Content-Type
            "Content-Type": "application/json",
          },
        }
      );
      setAppointments(response.data);
    }
    fetchApp();
  }, []);

  console.log(Appointments);

  if (!Appointments) {
    return (
      <div>
        <center>
          <div>
            <h1 className="formTitleLink">DocRising</h1>
          </div>
          <div>
            <Spinner animation="border" variant="primary" />
          </div>
        </center>
      </div>
    );
  } else {
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Sidebar />
        <div style={{ padding: 10, width: "1000px" }}>
          <Row xs={1} md={4} className="g-4">
            {Array.from(Appointments).map((_, idx) => (
              <Col>
                <Card style={{ width: "auto", border: "1px solid black" }}>
                  <Card.Img
                    style={{
                      width: "200px",
                      height: "200px",
                    }}
                    variant="top"
                    src="https://cdn0.iconfinder.com/data/icons/medical-2-4/48/68-512.png"
                  />
                  <Card.Body>
                    <Card.Title>
                      Name: {Appointments[idx].FirstName}{" "}
                      {Appointments[idx].LastName}
                    </Card.Title>
                    <Card.Text>
                      Service Required: {Appointments[idx].Service}
                    </Card.Text>
                    <Card.Text>Age: {Appointments[idx].Age}</Card.Text>
                    <Card.Text>Gender: {Appointments[idx].Gender}</Card.Text>
                    <Card.Text>
                      Requested Date: {Appointments[idx].Date}
                    </Card.Text>

                    <Button onClick={handleOpenModal} variant="primary">
                      Write Prescription
                    </Button>
                    <br></br>
                    <br></br>
                    <Modal
                      className="model"
                      isOpen={modalIsOpen}
                      onRequestClose={handleCloseModal}
                    >
                      <h2>Prescription</h2>
                      <form onSubmit={handleSubmit}>
                        <br></br> <br></br>
                        <label>
                          Patient First Name:
                          <input
                            placeholder="write here.."
                            className="inp"
                            type="text"
                            name="FirstName"
                            value={prescriptionData.FirstName}
                            onChange={handleInputChange}
                          />
                        </label>
                        <br></br>
                        <label>
                          Service:
                          <input
                            placeholder="write here.."
                            className="inp"
                            type="text"
                            name="Service"
                            value={prescriptionData.Service}
                            onChange={handleInputChange}
                          />
                        </label>
                        <br></br>
                        <br></br>
                        <label>
                          Doctor Notes:
                          <input
                            placeholder="write here.."
                            className="inp"
                            type="text"
                            name="DoctorNotes"
                            value={prescriptionData.DoctorNotes}
                            onChange={handleInputChange}
                          />
                        </label>
                        <br></br>
                        <br></br>
                        <button
                          style={{ fontSize: "small", width: "auto" }}
                          className="btn btn-success"
                          type="submit"
                        >
                          Submit Prescription
                        </button>
                      </form>
                    </Modal>

                    <Button
                      onClick={(event) =>
                        CompleteApp(event, Appointments[idx]._id)
                      }
                      variant="success"
                    >
                      Complete Appointment
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    );
  }
}

export default Appointments;
