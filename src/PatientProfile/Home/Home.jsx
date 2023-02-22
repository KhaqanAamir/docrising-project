import React from 'react'
import NavBar2 from '../../Components/NavBar2'
import Welcome from './Welcome'
import Services from './Services'
import Insurances from './Insurances'
import ExperiencedDocs from './ExperiencedDocs'

const Home = () => {


  return (
    <>
     <NavBar2/>   
      <Welcome/>
     <Services/>
     <Insurances/>
     <ExperiencedDocs/>
     </>
  )
}

export default Home