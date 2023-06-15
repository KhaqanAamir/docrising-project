import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import DoctorSignUpForm from "./DoctorSignUpForm";
import Home from "../../Components/Home";

const DoctorSignInForm = () => {
  // const [loggedIn, setLoggedIn] = useState(true);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const ref = useRef();

  const toggleRoute = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      navigate("/Doctor/Dashboard");
      localStorage.setItem("token", json.authtoken);
      localStorage.setItem("docid", json.userid);
    } else {
      // setLoggedIn(false);
      alert("Invalid credentials");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Home />
      <div className="App">
        <div ref={ref} className="appAside">
          <center>{/* <img src={Logo} alt="klm"/> */}</center>
        </div>
        <div className="appForm">
          <div>
            <p>Welcome to Doctor Portal</p>
            <div className="formCenter">
              <form
                className="formFields"
                onSubmit={toggleRoute}
                autoComplete="off"
              >
                <div className="formField">
                  <label className="formFieldLabel" htmlFor="email">
                    E-Mail Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="formFieldInput"
                    placeholder="Enter your email"
                    name="email"
                    value={credentials.email}
                    onChange={onChange}
                  />
                </div>

                <div className="formField">
                  <label className="formFieldLabel" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="formFieldInput"
                    placeholder="Enter your password"
                    name="password"
                    value={credentials.password}
                    onChange={onChange}
                  />
                </div>

                <div className="formField">
                  <button
                    onClick={toggleRoute}
                    className="formFieldButton"
                    type="submit"
                  >
                    Sign In
                  </button>{" "}
                </div>
              </form>
              <Link to="/Doctor/SignUp" className="formFieldLink">
                Create an Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorSignInForm;
