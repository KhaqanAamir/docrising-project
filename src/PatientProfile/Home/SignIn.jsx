import { React, useState, useContext } from "react";
import SignUpAlert from "./SignUpAlert";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import IconImage from "../../utils/Local Images/DocRisingIcon.jpeg";
import ActivePatientContext from "../../context/activepatient/ActivePatientContext";

const SignIn = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [alert, setalert] = useState(null);
  const a = useContext(ActivePatientContext);
  let json = "";
  let history = useNavigate();
  let erroemessage = "";

  const showalert = (type, message) => {
    setalert({
      type: type,
      message: message,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

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
      localStorage.setItem("loggedin", true)
      localStorage.setItem("activepatientdetails",JSON.stringify(patient))
      a.activepatient(JSON.parse(localStorage.getItem("activepatientdetails")));
      history("/patient/Home");
      console.log(a.patient);
    } else {
      erroemessage = json.error;
      console.log(erroemessage);
      showalert("danger", erroemessage);
    }
  };

  return (
    <>
      <div className="signup-main">
        <div className="dv">
          <center>
            <form onSubmit={onsubmit}>
              <img id="drlog" src={IconImage} alt="logo od doc" />
              <h3>
                <u>Patient-SignIn</u>
              </h3>{" "}
              <br></br>
              <SignUpAlert alert={alert} />
              <label>Email:</label>
              <input
                type="email"
                autoComplete="off"
                placeholder="enter email address"
                onChange={onchangeemail}
                value={email}
              ></input>{" "}
              <br></br>
              <br></br>
              <label>Password:</label>
              <input
                type="password"
                placeholder="password"
                onChange={onchangepassword}
                value={password}
              ></input>{" "}
              <br></br>
              <br></br>
              <input
                type="submit"
                className="btn btn-danger btn-block"
                value="Submit"
                style={{ position: "relative", left: "30px" }}
              ></input>{" "}
              <br></br>
              <br></br>
              <span>
                Don't have an Account? <Link to="/patient/SignUp">SignUp</Link>
              </span>
            </form>
          </center>
        </div>
      </div>
    </>
  );
};

export default SignIn;
