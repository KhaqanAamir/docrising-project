import React, { useState } from 'react';
import axios from 'axios';
import GetAllDoctorsContext from './GetAllDoctorsContext'

const GetAllDoctorsState=(props)=>{


    const [getdoctors, setgetdoctors]=useState([])

    const getdoctorsdata=async()=>{
        const response=await axios.get('http://localhost:4000/doctors/getdoctors')
        setgetdoctors(response.data)
        console.log(response.data)
    }

    return(

    <GetAllDoctorsContext.Provider value={{getdoctorsdata, getdoctors}}>
        {props.children}
    </GetAllDoctorsContext.Provider>

    )
}

export default GetAllDoctorsState;
