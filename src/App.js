import {React,useState} from 'react'
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUp from './PatientProfile/Home/SignUp';
import Home from './PatientProfile/Home/Home';
import ActivePatientState from './context/activepatient/ActivePatientState';
import Forms from './PatientProfile/Home/Forms'
import DashBoard from './Components/DashBoard';
import SignIn from './PatientProfile/Home/SignIn';
import PatientProfile from './PatientProfile/Home/PatientProfile';
import PaymentForm from './PatientProfile/Home/PaymentForm';
import SelfMedication from './PatientProfile/Home/SelfMedication';





// window.onbeforeunload = function() {
//   localStorage.clear();
//   };

function App() {  
 
  
  const alreadyloggedin=localStorage.getItem('loggedin')

  const [applieddate,setapplieddate]=useState('Muna bhai')

  return (    
      <>
      <ActivePatientState>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={alreadyloggedin?<Home/>:<DashBoard/>}></Route>
            <Route path='/patient/SignUp' element={<SignUp/>}></Route>
            <Route path='/patient/SignIn' element={<SignIn/>}></Route>
            <Route path='/patient/Home' element={<Home/>}></Route>
            <Route path='/patient/SelfMedication' element={<SelfMedication/>}></Route>
            <Route path='/patient/profile' element={<PatientProfile/>}></Route>
            <Route path='/patientprofile/patient-applicationform' element={<Forms setapplieddate={setapplieddate} applieddate={applieddate}/>}></Route>
            <Route path='/patientprofile/payment-method' element={<PaymentForm/>}></Route>
          </Routes>
        </BrowserRouter>
        </ActivePatientState>
      </>
    )
}

export default App;
