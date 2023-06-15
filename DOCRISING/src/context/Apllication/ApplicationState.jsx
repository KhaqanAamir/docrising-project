import {React, useState} from 'react'
import ApplicationContext from './ApplicationContext'

const ApplicationState=(props)=>{

    const [allapplications,setallapplications]=useState();

    //Get prescriptions
    const getapplications=async()=>{
    const called=await fetch('http://localhost:4000/prescription/fetchallprescriptions', {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        }
      });

      const allprescriptions= await called.json()
       setallapplications(allprescriptions)
}

    return(

        <ApplicationContext.Provider value={{allapplications, getapplications}}>
            {props.children}
        </ApplicationContext.Provider>
    
        )   
}

export default ApplicationState