import {React, useContext, useState, useEffect} from 'react'
import IconImage from '../../utils/Local Images/DocRisingIcon.jpeg'
import '../../Styles/Pages/Home/SignUp.css'
import axios from 'axios'
import ActivePatientContext from '../../context/activepatient/ActivePatientContext'
import { Link } from 'react-router-dom'
import SignUpAlert from './SignUpAlert'

const SignUp = () => {

    const [active,setactive]=useState(false)

    const [olduser, setolduser]=useState(false);
    
    const [fullname,changefullname]=useState('');
    const [emailaddress,changeemail]=useState('');
    const [password,changepassword]=useState('');
    const [gender,changegender]=useState('');
    const [city, changecity]=useState('');
    const [patients, setpatients]=useState('')
    const a=useContext(ActivePatientContext);


    const onchangefullname=(event)=>{
        changefullname(event.target.value)
    }


    const onchangeemail=(event)=>{
      changeemail(event.target.value)
    }

    const onchangepassword=(event)=>{
    changepassword(event.target.value)
    }

    const onchangegender=(event)=>{
      changegender(event.target.value)
    }

    const onchangecity=(event)=>{
      changecity(event.target.value)
    }

    
    useEffect(()=>{
      fetch('http://localhost:4000/app/getData')
      .then(res=>{
      if(res.ok){
          return res.json()
      }
  }).then(jsonRes=>setpatients(jsonRes))

  })



    const onSubmit=(event)=>{
      event.preventDefault();

      const registered={
        FullName:fullname,
        Email:emailaddress,
        City:city,
        Password:password,
        Gender:gender
      }

      for(var i=0;i<=patients.length;i++){

        

        if(emailaddress===patients[i].Email){
          setolduser(true)
          break;
        }
      
        if(emailaddress!==patients[i].Email){
          axios.post('http://localhost:4000/app/signup', registered)
          setactive(true)
          break;
        }

      }  
    
      changefullname('')
      changecity('')
      changeemail('')
      changegender('')
      changepassword('')
      a.activepatient(fullname)
      }

 
if(active===false){
  return (
    
          <div className='signup-main'>
          <div className='dv'>
        <center><form onSubmit={onSubmit} >
            <img id="drlog" src={IconImage} alt='logo od doc'/>
            <h3><u>Patient-Signup</u></h3> <br></br>
            {olduser && <SignUpAlert type='warning'/>}
            <label>Full Name:</label>
         <input type='text' autoComplete="off" placeholder="enter full name" align='middle' onChange={onchangefullname} value={fullname}></input> <br></br><br></br>
         <label>City:</label>
         <input type='text' autoComplete="off" placeholder='enter city' onChange={onchangecity} value={city}></input><br></br><br></br> 
         <label>Email:</label>
             <input type='email' autoComplete="off" placeholder="enter email address" onChange={onchangeemail} value={emailaddress}></input> <br></br><br></br>
             <label>Password:</label>
             <input type='password' placeholder="password" onChange={onchangepassword} value={password}></input> <br></br><br></br>
             <label>Gender:</label>
            <input type='text' placeholder="select gender" onChange={onchangegender} value={gender}></input> <br></br><br></br>
            <input type="submit" className='btn btn-danger btn-block' value='Submit' style={{position:'relative', left:'30px'}} >
            </input> <br></br><br></br>
            <span>Already have an Account? <Link to='/patient/SignIn' style={{color:'black'}}>SignIn</Link></span>
            </form></center>
            </div>
        </div>
        
  )
  }

  else if(active===true){
    return(<>
      {window.open('/patientprofile', '_self')}
    </>)
    
  }
   
}

export default SignUp