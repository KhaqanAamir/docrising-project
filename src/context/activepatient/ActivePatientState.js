import React, { useState } from 'react';
import ActivePatientContext from './ActivePatientContext'

const ActivePatientState=(props)=>{


    const [patient, setpatient]=useState({})

    const activepatient=(name)=>{
        setpatient(name)
    }

    return(

    <ActivePatientContext.Provider value={{activepatient, patient}}>
        {props.children}
    </ActivePatientContext.Provider>

    )
}

export default ActivePatientState;
