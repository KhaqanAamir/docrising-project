import {React} from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './PatientProfile/Home/SignUp';
import Home from './PatientProfile/Home/Home';
import ActivePatientState from './context/activepatient/ActivePatientState';
import Forms from './PatientProfile/Home/Forms'
import DashBoard from './Components/DashBoard';
import SignIn from './PatientProfile/Home/SignIn';



function App() {

  return (    
      <>
      <ActivePatientState>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<DashBoard/>}></Route>
            <Route path='/patient/SignUp' element={<SignUp/>}></Route>
            <Route path='/patient/SignIn' element={<SignIn/>}></Route>
            <Route path='/patientprofile' element={<Home/>}></Route>
            <Route path='/patientprofile/patient-applicationform' element={<Forms/>}></Route>
          </Routes>
        </BrowserRouter>
        </ActivePatientState>
      </>
    )
}

export default App;
