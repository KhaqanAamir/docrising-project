  import { React, useState, useContext, useRef } from "react";
// import SignUpAlert from "./SignUpAlert";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import IconImage from "../../utils/Local Images/DocRisingIcon.jpeg";
import axios from "axios";
import ActivePatientContext from "../../context/activepatient/ActivePatientContext";
import Home from "../../Components/Home";
import DocRisingIcon from '../../utils/Local Images/DocRisingIcon.jpeg'

const projectID = "f548ae4a-5b3c-4258-b3cc-6929a7f631e4";

const PatientSignInForm = () => {
  const ref = useRef();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  // const [alert, setalert] = useState(null);
  const [error, setError] = useState("");
  const a = useContext(ActivePatientContext);
  let json = "";
  let history = useNavigate();
  let erroemessage = "";

  // const showalert = (type, message) => {
  //   setalert({
  //     type: type,
  //     message: message,
  //   });
  //   setTimeout(() => {
  //     setalert(null);
  //   }, 2000);
  // };

  const onchangeemail = (e) => {
    setemail(e.target.value);
  };

  const onchangepassword = (e) => {
    setpassword(e.target.value);
  };

  const onsubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:4000/user/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Email: email, Password: password }),
    });
    json = await response.json();


    // const authObject = {
    //   "Project-ID": projectID,
    //   "User-Name": 'Khaqan Aamir',
    //   "User-Secret": 'khaqan',
    // };

    // try {
    //   await axios.get("https://api.chatengine.io/chats", {
    //     headers: authObject,
    //   });

    //   localStorage.setItem("username", 'Khaqan Aamir');
    //   localStorage.setItem("password", 'khaqan');

    //   // window.location.reload();
    //   setError("");
    // } catch (err) {
    //   setError("Oops, incorrect credentials.");
    // }

    if (json.success) {
      const patientdetails = await fetch("http://localhost:4000/user/getuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": json.authToken,
        },
      });

      const patient = await patientdetails.json();
      localStorage.setItem("token", json.authToken);
      localStorage.setItem("loggedin", true);
      localStorage.setItem("activepatientdetails", JSON.stringify(patient));
      a.activepatient(JSON.parse(localStorage.getItem("activepatientdetails")));
      history("/patient/Home");
      console.log(a.patient);
    } else {
      erroemessage = json.error;
      console.log(erroemessage);
      // showalert("danger", erroemessage);
    }
  };

  return (
    <div>
      <Home />
      <div className="App">
        <div ref={ref} className="appAside">
          <center>{<img src={DocRisingIcon} alt="klm"/>}</center>
        </div>
        <div className="appForm">
          {/* <div className="pageSwitcher"></div> */}
          <div>
            <p>Welcome to Patient Portal</p>
            <div className="formCenter">
              <form
                className="formFields"
                onSubmit={onsubmit}
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
                    value={email}
                    onChange={onchangeemail}
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
                    value={password}
                    onChange={onchangepassword}
                  />
                </div>

                <div className="formField">
                  <input
                    type="submit"
                    className="formFieldButton"
                    value="Submit"
                    style={{}}
                  ></input>{" "}
                </div>
              </form>
              <Link to="/Patient/SignUp" className="formFieldLink">
                Create an account
              </Link>
            </div>
            {error}
          </div>
        </div>
      </div>
    </div>
  );

 
};

export default PatientSignInForm;
