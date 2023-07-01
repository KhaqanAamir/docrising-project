import React, {  useState } from "react";
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Home from "./Components/Home";
import Dashboard from './doctor/pages/Dashboard'
import DoctorSignInForm from "./doctor/pages/DoctorSignInForm";
import PatientSignInForm from "./PatientProfile/Home/PatientSignInForm";
import DoctorSignUpForm from "./doctor/pages/DoctorSignUpForm";
import PatientSignUpForm from "./PatientProfile/Home/PatientSignUpForm";
import Appointments from "./doctor/pages/Appointments";
import AppointmentsReq from "./doctor/pages/AppointmentsReq";
import Profile from "./doctor/pages/Profile";
import PatientHome from "./PatientProfile/Home/PatientHome";
import PatientProfile from "./PatientProfile/Home/PatientProfile";
import ApplicationForm from "./PatientProfile/Home/ApplicationForm";
import ADHD from './PatientProfile/Services/ADHD'
import Anxiety from './PatientProfile/Services/Anxiety'
import SelfMedication from './PatientProfile/Home/SelfMedication'
import PaymentForm from './PatientProfile/Home/PaymentForm'
import GetAllDoctorsState from "./context/doctor/GetAllDoctorsState";
import ActiveDoctorState from "./context/activedoctor/ActiveDoctorState";
import About from './PatientProfile/Home/About'
import Calendar2 from "./PatientProfile/Home/Calendar2";

import "./App.css";
import Prescription from "./doctor/pages/Prescription";
function App() {


  const [docdetails,setdocdetails]=useState([]);
  const [formid,setformid]=useState('')
  

  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* signin and signout routes of both doctor and patients routees */}
          <Route path="/" element={<Home/>} />
          <Route path="/Doctor/SignIn" element={<ActiveDoctorState><DoctorSignInForm/></ActiveDoctorState>} />
          <Route path="/Patient/SignIn" element={<PatientSignInForm/>} />
          <Route path="/Doctor/SignUp" element={<DoctorSignUpForm/>} />
          <Route path="/Patient/SignUp" element={<PatientSignUpForm/>} />

          {/* all patient routes */}
          <Route path="/Patient/Home" element={<GetAllDoctorsState><PatientHome/></GetAllDoctorsState>}/>
          <Route path="/Patient/Profile" element={<PatientProfile/>}/>
          <Route path="/Patient/ApplicationForm" element={<GetAllDoctorsState><ApplicationForm setformid={setformid}/></GetAllDoctorsState>}/>
          <Route path="/Patient/Services/ADHD" element={<ADHD/>}/>
          <Route path="/Patient/Services/Anxiety" element={<Anxiety/>}/>
          <Route path="/Patient/SelfMedication" element={<SelfMedication/>}/>
          <Route path="7." element={<About/>}/>
          <Route path="/Patient/PaymentForm" element={<PaymentForm formid={formid}/>}/>
          <Route path="/Patient/Calendar" element={<Calendar2/>}/>

          {/* all doctor routes */}
          <Route path="/Doctor/Dashboard" element={<Dashboard docdetails={docdetails}/>} />
          <Route path="/Doctor/Appointments" element={<Appointments />} />
          <Route path="/Doctor/AppointmentsReq" element={<AppointmentsReq />} />
          <Route path="/Doctor/Profile" element={<Profile setdocdetails={setdocdetails}/>} />
          <Route path="/Doctor/Prescription" element={<Prescription />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
