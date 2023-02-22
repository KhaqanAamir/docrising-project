import React, { useState } from 'react';
import ActivePatientContext from './ActivePatientContext'

const ActivePatientState=(props)=>{


    // const [activepatient,setactivepatient]=useState('Khuni');

    // const changeactivepatient=(name)=>{
    //     setactivepatient(name);
    // }

    const [patient, setpatient]=useState(null)

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
