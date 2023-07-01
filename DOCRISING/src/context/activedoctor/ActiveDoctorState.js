import React, { useState } from 'react';
import ActiveDoctorContext from './ActiveDoctorContext'

const ActiveDoctorState=(props)=>{


    const [doctor, setdoctor]=useState({})

    const activedoctor=(name)=>{
        setdoctor(name)
    }

    return(

    <ActiveDoctorContext.Provider value={{activedoctor, doctor}}>
        {props.children}
    </ActiveDoctorContext.Provider>

    )
}

export default ActiveDoctorState;
