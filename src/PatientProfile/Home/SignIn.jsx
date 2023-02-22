import {React,  useState, useEffect } from 'react'
import  SignUpAlert  from './SignUpAlert'
import IconImage from '../../utils/Local Images/DocRisingIcon.jpeg'

const SignIn = () => {
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [patients,setpatient]=useState('')
    const [active,setactive]=useState(false)
    const [alert,setalert]=useState(false)

    const onchangeemail=(e)=>{
        setemail(e.target.value)
    }

    const onchangepassword=(e)=>{
        setpassword(e.target.value)
    }

    useEffect(()=>{
        fetch('http://localhost:4000/app/getData')
        .then(res=>{
            if(res.ok){
                return res.json();
            }
        }).then(jsonres=>setpatient(jsonres))
    })

    console.log(patients)

    const onsubmit=(event)=>{
        event.preventDefault();
  

        for(var i=0;i<=patients.length;i++){

        

            if(email===patients[i].Email && password===patients[i].Password){
                console.log('checking1')
            setactive(true)
              break;
            }
          
            if(email!==patients[i].Email || password!==patients[i].Password){
                console.log('checking2')
              setalert(true)
              break;
            }
    
          } }

 if(active===false){         
  return (
    <>
    <div className='signup-main'>
        <div className='dv'>
        <center><form onSubmit={onsubmit}>

            <img id="drlog" src={IconImage} alt='logo od doc'/>
            <h3><u>Patient-SignIn</u></h3> <br></br>
            {alert && <SignUpAlert type='danger'/>}
            <label>Email:</label>
             <input type='email' autoComplete="off" placeholder="enter email address" onChange={onchangeemail} value={email}></input> <br></br><br></br>
             <label>Password:</label>
             <input type='password' placeholder="password" onChange={onchangepassword} value={password}></input> <br></br><br></br>
            <input type="submit" className='btn btn-danger btn-block' value='Submit' style={{position:'relative', left:'30px'}} >
            </input> <br></br><br></br>
            <span>Don't have an Account? SignUp</span>
            </form></center>
            </div>
        </div>
    </>
  )
}

else if(active===true){
    return(<>
      {window.open('/patientprofile', '_self')}
    </>)
    
    }}

export default SignIn