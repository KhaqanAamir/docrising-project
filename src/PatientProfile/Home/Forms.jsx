import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import NavBar2 from '../../Components/NavBar';
import Dropdown from 'react-bootstrap/Dropdown';

const Forms = () => {

    
    const [firstname,setfirstname]=useState('');
    const [lastname,setlastname]=useState('');
    const [email,setemail]=useState('');
    const [phonenumber,setphonenumber]=useState('')
    const [province,setprovince]=useState('')
    const [city,setcity]=useState('')
    const [gender,setgender]=useState('Male')
    const [service,setservice]=useState('ADHD')

    const changefirstname=(event)=>{
        setfirstname(event.target.value)
    }
    const changelastname=(event)=>{
        setlastname(event.target.value)
    }
    const changeemail=(event)=>{
        setemail(event.target.value)
    }

    const changephonenumber=(event)=>{
      setphonenumber(event.target.value)
    }

    const changeprovince=(event)=>{
      setprovince(event.target.value)
    }

    const changecity=(event)=>{
      setcity(event.target.value)
    }
    
    const changegender=(event)=>{
      setgender(event.target.value)
    }
    
    const changeservice=(event)=>{
      //setservice(event.target.value)
      console.log(service)
    }


    const onSubmit=(event)=>{
      event.preventDefault();

      const registered={
        FirstName:firstname,
        LastName:lastname,
        Email:email,
        PhoneNumber:phonenumber,
        Province:province,
        City:city,
        Gender:gender,
        Service:service
      }

      // for(var i=0;i<=patients.length;i++){
        // if(password===patients[i].Password && emailaddress===patients[i].Email){

          //console.log(patients)
          axios.post('http://localhost:4000/app/applicants', registered)
          .then(response=>{console.log(response.data)})   

          // setactivepatient(patients[i]);


          
      setfirstname('')
      setlastname('')
      setemail('')
      setphonenumber('')
      setprovince('')
      setcity('')
      setgender('')
      setservice('')

      window.open('http://localhost:3000/patientprofile','_self', 'noopener, noreferrer')

        }

  return (
    <>
    <NavBar2/>
    <center><div style={{position:'absolute', left:'15%', top:'45%'}} className='container'>
        <form style={{minWidth:'100%'}} onSubmit={onSubmit}>
            <label htmlFor="fullname"> First Name: </label><input type="text" id='fullname' placeholder='FirstName' value={firstname} onChange={changefirstname} className='form-control form-goup d-inline-block mx-3' style={{maxWidth:'fit-content', margin:'1.5em'}}/>
            <label htmlFor="lastname">Last Name:</label><input type="text" id='lastname' placeholder='LastName' value={lastname} onChange={changelastname}  className='form-control form-goup d-inline-block mx-3' style={{maxWidth:'fit-content'}}/>
            <label htmlFor="email">Email:</label><input type="text" id='email' placeholder='email' value={email} onChange={changeemail} className='form-control form-goup d-inline-block mx-3' style={{maxWidth:'fit-content', margin:'2em'}}/>
            <label htmlFor="number">Phone Number:</label><input type="text" id='number' placeholder='Phone Number' value={phonenumber} onChange={changephonenumber}  className='form-control form-goup d-inline-block  mx-3' style={{maxWidth:'fit-content'}}/>
            <label htmlFor="province">Province</label><input type="text" id='province' placeholder='Enter Province' value={province} onChange={changeprovince} className='form-control form-goup d-inline-block mx-3' style={{maxWidth:'fit-content', margin:'2em'}}/>
            <label htmlFor="city">City:</label><input type="text" id='city' value={city} placeholder='Enter your city' onChange={changecity}  className='form-control form-goup d-inline-block mx-3' style={{maxWidth:'fit-content'}}/> <br/>
            <input type="radio" id="male" name="fav_language" value={gender} onChange={changegender} style={{maxWidth:'fit-content', margin:'0'}}/> <label htmlFor="male" >Male</label>
            <input type="radio" id="female" name="fav_language" value={gender} onChange={changegender} style={{maxWidth:'fit-content', margin:'0'}}/> <label htmlFor="female" >Female</label>
            <input type="radio" id="other" name="fav_language" value={gender} onChange={changegender} style={{maxWidth:'fit-content', margin:'0'}}/> <label htmlFor="other" >Other</label>
           <br /><br />
           <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Select Service
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={changeservice}>ADD/ADHD Treatment</Dropdown.Item>
        <Dropdown.Item onClick={changeservice}>Anxiety Treatment</Dropdown.Item>
        <Dropdown.Item onClick={changeservice}>Depression Treatment</Dropdown.Item>
        <Dropdown.Item onClick={changeservice}>Insomnia Treatment</Dropdown.Item>
        <Dropdown.Item onClick={changeservice}>ESA Letter</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> 
    <center><input type="submit" className='btn btn-danger btn-block' value='Submit' style={{position:'absolute', left:'37%', top:'80%'}}/></center>
        </form>
    </div></center>
    </>
  )
}

export default Forms