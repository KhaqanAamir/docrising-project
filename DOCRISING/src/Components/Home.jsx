import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Home = () => {
  
  return (
    <>
      <div className="LogoSec">
        <div className="split">
          <div className="CompName">
            <span>Welcome to </span>
            <span>Doc</span>
            <span>Rising</span>
          </div>
          <center>
            <Button variant="outline-secondary">
              <Link to='/Doctor/SignIn' style={{textDecoration:'none', color:'white'}}>Login as Doctor</Link>
            </Button>
          </center>
          <center>
            <Button variant="outline-secondary">
              <Link to='/Patient/SignIn' style={{textDecoration:'none', color:'white'}}>Login as Patient</Link>
            </Button>
          </center>
        </div>
      </div>
    </>
  );
};
export default Home;
