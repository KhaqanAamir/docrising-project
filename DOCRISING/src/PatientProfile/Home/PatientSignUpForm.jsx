import { React, useState, useContext, useRef } from "react";
// import IconImage from "../../utils/Local Images/DocRisingIcon.jpeg";
import "../../Styles/Pages/Home/SignUp.css";
import { useNavigate } from "react-router-dom";
import ActivePatientContext from "../../context/activepatient/ActivePatientContext";
import { Link } from "react-router-dom";
// import SignUpAlert from "./SignUpAlert";
import Home from "../../Components/Home";
import DocRisingIcon from '../../utils/Local Images/DocRisingIcon.jpeg'

const PatientSignUpForm = () => {
  // states I have used
  let history = useNavigate();
  const ref = useRef();

  // const [alert, setalert] = useState(null);
  const [fullname, changefullname] = useState("");
  const [emailaddress, changeemail] = useState("");
  const [password, changepassword] = useState("");
  const [gender, changegender] = useState("");
  const [city, changecity] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [address, setaddress] = useState("");
  // contexts
  const a = useContext(ActivePatientContext);

  // this variable is used to connect with the Signupmodel schema

  // const showalert = (type, message) => {
  //   setalert({
  //     type: type,
  //     message: message,
  //   });
  //   setTimeout(() => {
  //     setalert(null);
  //   }, 2000);
  // };

  let errormessage = "";

  const onchangefullname = (event) => {
    changefullname(event.target.value);
  };

  const onchangeemail = (event) => {
    changeemail(event.target.value);
  };

  const onchangepassword = (event) => {
    changepassword(event.target.value);
  };

  const onchangegender = (event) => {
    changegender(event.target.value);
  };

  const onchangecity = (event) => {
    changecity(event.target.value);
  };

  const onchangephonenumber = (event) => {
    setphonenumber(event.target.value);
  };

  const onchangeaddress = (event) => {
    setaddress(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:4000/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        FullName: fullname,
        Email: emailaddress,
        PhoneNumber: phonenumber,
        City: city,
        Address: address,
        Password: password,
        Gender: gender,
      }),
    });

    const json = await response.json();
    console.log(json.success, json.authToken);

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
      console.log(patient);
    } else {
      errormessage = json.error;
      console.log(errormessage);
      // showalert("danger", errormessage);
    }
  };

  return (
    <>
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
                onSubmit={onSubmit}
                autoComplete="off"
              >
                <div className="formField">
                  <label className="formFieldLabel" htmlFor="email">
                    Full Name:
                  </label>
                  <input
                    type="text"
                    className="formFieldInput"
                    autoComplete="off"
                    placeholder="enter full name"
                    id="FullName"
                    name="FullName"
                    align="middle"
                    onChange={onchangefullname}
                    value={fullname}
                    required
                  />
                </div>

                <div className="formField">
                  <label className="formFieldLabel" htmlFor="password">
                    Email:
                  </label>
                  <input
                    type="email"
                    className="formFieldInput"
                    autoComplete="off"
                    placeholder="enter email address"
                    id="Email"
                    name="Email"
                    onChange={onchangeemail}
                    value={emailaddress}
                    required
                  />
                </div>

                <div className="formField">
                  <label className="formFieldLabel" htmlFor="password">
                    Phone Number:
                  </label>
                  <input
                    type="number"
                    className="formFieldInput"
                    autoComplete="off"
                    placeholder="enter your mobile#"
                    id="PhoneNumber"
                    name="PhoneNumber"
                    onChange={onchangephonenumber}
                    value={phonenumber}
                    required
                  />
                </div>

                <div className="formField">
                  <label className="formFieldLabel" htmlFor="password">
                    City:
                  </label>
                  <input
                    type="text"
                    className="formFieldInput"
                    autoComplete="off"
                    placeholder="enter city"
                    id="City"
                    name="City"
                    onChange={onchangecity}
                    value={city}
                    required
                  />
                </div>

                <div className="formField">
                  <label className="formFieldLabel" htmlFor="password">
                    Address:
                  </label>
                  <input
                    type="text"
                    className="formFieldInput"
                    autoComplete="off"
                    placeholder="enter residential address"
                    id="Address"
                    name="Address"
                    onChange={onchangeaddress}
                    value={address}
                    required
                  />
                </div>

                <div className="formField">
                  <label className="formFieldLabel" htmlFor="password">
                    Password:
                  </label>
                  <input
                    type="password"
                    className="formFieldInput"
                    placeholder="password"
                    onChange={onchangepassword}
                    id="Password"
                    name="Password"
                    value={password}
                    autoComplete="current-password"
                    required
                  />
                </div>

                <div className="formField">
                  <label className="formFieldLabel" htmlFor="password">
                    Gender:
                  </label>
                  <input
                    type="text"
                    className="formFieldInput"
                    placeholder="select gender"
                    id="Gender"
                    name="Gender"
                    onChange={onchangegender}
                    value={gender}
                    required
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
              <Link to="/Patient/SignIn" className="formFieldLink">
                Already a member
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  // return (

  //   <div className="signup-main">
  //     <div className="dv">
  //       <center>
  //         <form onSubmit={onSubmit}>
  //           <img id="drlog" src={IconImage} alt="logo od doc" />
  //           <h3>
  //             <u>Patient-Signup</u>
  //           </h3>{" "}
  //           <br></br>
  //           <SignUpAlert alert={alert} />
  //           <label>Full Name:</label>
  //           <input
  //             type="text"
  //             autoComplete="off"
  //             placeholder="enter full name"
  //             id="FullName"
  //             name="FullName"
  //             align="middle"
  //             onChange={onchangefullname}
  //             value={fullname}
  //             required
  //           ></input>{" "}
  //           <br></br>
  //           <br></br>
  //           <label>Email:</label>
  //           <input
  //             type="email"
  //             autoComplete="off"
  //             placeholder="enter email address"
  //             id="Email"
  //             name="Email"
  //             onChange={onchangeemail}
  //             value={emailaddress}
  //             required
  //           ></input>{" "}
  //           <br></br>
  //           <br></br>
  //           <label>Phone#</label>
  //           <input
  //             type="number"
  //             autoComplete="off"
  //             placeholder="enter your mobile#"
  //             id="PhoneNumber"
  //             name="PhoneNumber"
  //             onChange={onchangephonenumber}
  //             value={phonenumber}
  //             required
  //           ></input>{" "}
  //           <br></br>
  //           <br></br>
  //           <label>City:</label>
  //           <input
  //             type="text"
  //             autoComplete="off"
  //             placeholder="enter city"
  //             id="City"
  //             name="City"
  //             onChange={onchangecity}
  //             value={city}
  //             required
  //           ></input>
  //           <br></br>
  //           <br></br>
  //           <label>Address:</label>
  //           <input
  //             type="text"
  //             autoComplete="off"
  //             placeholder="enter residential address"
  //             id="Address"
  //             name="Address"
  //             onChange={onchangeaddress}
  //             value={address}
  //             required
  //           ></input>
  //           <br></br>
  //           <br></br>
  //           <label>Password:</label>
  //           <input
  //             type="password"
  //             placeholder="password"
  //             onChange={onchangepassword}
  //             id="Password"
  //             name="Password"
  //             value={password}
  //             autoComplete="current-password"
  //             required
  //           ></input>{" "}
  //           <br></br>
  //           <br></br>
  //           <label>Gender:</label>
  //           <input
  //             type="text"
  //             placeholder="select gender"
  //             id="Gender"
  //             name="Gender"
  //             onChange={onchangegender}
  //             value={gender}
  //             required
  //           ></input>{" "}
  //           <br></br>
  //           <br></br>
  //           <input
  //             type="submit"
  //             className="btn btn-danger btn-block"
  //             value="Submit"
  //             style={{ position: "relative", left: "30px" }}
  //           ></input>{" "}
  //           <br></br>
  //           <br></br>
  //           <span>
  //             Already have an Account?{" "}
  //             <Link to="/patient/SignIn" style={{ color: "black" }}>
  //               SignIn
  //             </Link>
  //           </span>
  //         </form>
  //       </center>
  //     </div>
  //   </div>
  // );
};

export default PatientSignUpForm;
