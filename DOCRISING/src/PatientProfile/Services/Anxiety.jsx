import React, { useEffect, useState } from 'react';
import Spinner from "react-bootstrap/Spinner"
import axios from 'axios';
import Navbar2 from '../../Components/NavBar2'
import '../../Styles/Pages/Home/Anxiety.css'
import Anxietyimg from '../../utils/Local Images/Anxiety.jpeg'
import anxietyinclusions from '../../utils/Local Images/anxietyinclusions.png'
import anxietysymptoms from '../../utils/Local Images/anxietysymptoms.jpg'
import Footer from '../../Components/Footer';


const Anxiety = () => {

    const [anxietyTreatmentData, setAnxietyTreatmentData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/services/api/anxiety-data');

        setAnxietyTreatmentData(Object.values(response.data))

      } catch (error) {
        console.error('Error fetching anxiety treatment data:', error);
      }
    };

    fetchData();
  }, []);


  


  if (!anxietyTreatmentData) {
    return (
      <div  style={{position:'fixed',left:'45%', top:'30%'}}>
          <div>
            <h1 className="formTitleLink">DocRising</h1>
          </div>
          <div>
            <center>
            <Spinner animation="border" variant="primary" />
            </center>
          </div>
      </div>
    );
  }

  else{

  return (
     <div className='anxiety-main-div'>
      <Navbar2/>
      <br />
      <center><h1>{anxietyTreatmentData[0]}</h1></center>

      <section className="my-section">
      <h1 className="section-title">What is Anxiety</h1>
      <p className="section-description">
        {anxietyTreatmentData[1][0]}<br/>
        {anxietyTreatmentData[1][1]} <br/>
        {anxietyTreatmentData[1][2]}<br/>
        {anxietyTreatmentData[1][3]}<br/>
        {anxietyTreatmentData[1][4]}
        {anxietyTreatmentData[1][5]}
      </p>
      <center><img className="section-image" src={Anxietyimg} alt="Section" /></center>
    </section>

    <br />


    <div className="two-sections">
      <div className="section">
        <h2 style={{backgroundColor:'#bebbbb'}} >What does anxiety include</h2>
        <p>
          {anxietyTreatmentData[1][8]}
          {anxietyTreatmentData[1][9]}
        </p>
        <img src={anxietyinclusions} alt="Section 1" />
      </div>
      <div className="section">
        <h2 style={{backgroundColor:'#bebbbb'}}>Symptoms of anxiety</h2>
        <p>
          {anxietyTreatmentData[1][12]}
          {anxietyTreatmentData[1][13]}
        </p>
        <img src={anxietysymptoms} alt="Section 2" />
      </div>
    </div> <br />

    {/* {anxietyTreatmentData[1].map((items,index)=>{
        return(
        <>
          <p key={[1][index]}>{anxietyTreatmentData[1][index]}</p>
        </>
        )
      })} */}

      <Footer/>

    </div>

    
  )

}
}

export default Anxiety