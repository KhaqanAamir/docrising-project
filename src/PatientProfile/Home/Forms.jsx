import React from "react";
import { useState, useEffect } from "react";
import NavBar2 from "../../Components/NavBar2";
import { useNavigate } from "react-router-dom";
import Calendar from "./Calendar";

const Forms = ({ setapplieddate, applieddate, getproviders }) => {
  let history = useNavigate();
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [province, setprovince] = useState("");
  const [city, setcity] = useState("");
  const [gender, setgender] = useState("");
  const [service, setservice] = useState("");
  const [age, setage] = useState("");
  const [allergy, setallergy] = useState("");
  const [weight, setweight] = useState("");
  const [pharmacy, setpharmacy] = useState("");
  const [currentdoctor, setcurrentdoctor] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDoctorId,setselectedDoctorId]=useState('')
  const [formId,setformId]=useState('')

  window.onload = function() {
    history('/patient/Home')
  };

  const handleDropdownChange = (event) => {
    setSelectedDoctor(event.target.value);
    // console.log(selectedDoctor)
    const selecteditem=getproviders.filter(item=>item.name===selectedDoctor);
    setselectedDoctorId(selecteditem[0]._id)
    console.log(selecteditem[0].name)
    console.log(selectedDoctorId)
  };
  

  const changefirstname = (event) => {
    setfirstname(event.target.value);
  };
  const changeage = (event) => {
    setage(event.target.value);
  };
  const changeallergy = (event) => {
    setallergy(event.target.value);
  };
  const changeweight = (event) => {
    setweight(event.target.value);
  };
  const changepharmacy = (event) => {
    setpharmacy(event.target.value);
  };
  const changecurrentdoctor = (event) => {
    setcurrentdoctor(event.target.value);
  };
  const changelastname = (event) => {
    setlastname(event.target.value);
  };
  const changeemail = (event) => {
    setemail(event.target.value);
  };

  const changephonenumber = (event) => {
    setphonenumber(event.target.value);
  };

  const changeprovince = (event) => {
    setprovince(event.target.value);
  };

  const changecity = (event) => {
    setcity(event.target.value);
  };

  useEffect(() => {}, []);

  const changegender = (event) => {
    setgender(event.target.value);
  };

  const changeservice = (event) => {
    setservice(event.target.value);
    console.log(service);
  };
  let json = "";

  const onSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:4000/user/applicants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        FirstName: firstname,
        LastName: lastname,
        Email: email,
        PhoneNumber: phonenumber,
        Province: province,
        City: city,
        Age: age,
        Allergy: allergy,
        Weight: weight,
        Pharmacy: pharmacy,
        CurrentDoctor: currentdoctor,
        SelectedProvider:selectedDoctor,
        Gender: gender,
        Service: service,
        doc_id:selectedDoctorId,
        Date: applieddate,
      }),
    });
    json = await response.json();
    console.log(json.data)
    setformId(json.data._id)
    localStorage.setItem('formid',json.data._id)
    console.log(localStorage.getItem('formid'))
    localStorage.setItem('firstname',firstname)
    // console.log(formId)
    if (localStorage.getItem('formid')) {
      history("/patientprofile/payment-method");
    }
  };

  // console.log(getproviders[0]._id);

  return (
    <>
      <NavBar2 />
      <center>
        <div
          style={{ position: "absolute", left: "15%", top: "20%" }}
          className="container"
        >
          <form style={{ minWidth: "100%" }} onSubmit={onSubmit}>
            <label htmlFor="fullname"> First Name: </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="FirstName"
              value={firstname}
              onChange={changefirstname}
              className="form-control form-goup d-inline-block mx-3"
              style={{ maxWidth: "fit-content", margin: "1.5em" }}
            />
            <label htmlFor="lastname">Last Name:</label>
            <input
              type="text"
              id="lastname"
              placeholder="LastName"
              value={lastname}
              onChange={changelastname}
              className="form-control form-goup d-inline-block mx-3"
              style={{ maxWidth: "fit-content" }}
            />
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              placeholder="email"
              value={email}
              onChange={changeemail}
              className="form-control form-goup d-inline-block mx-3"
              style={{ maxWidth: "fit-content", margin: "2em" }}
            />
            <br />
            <label htmlFor="number">Phone Number:</label>
            <input
              type="text"
              id="number"
              placeholder="Phone Number"
              value={phonenumber}
              onChange={changephonenumber}
              className="form-control form-goup d-inline-block  mx-3"
              style={{ maxWidth: "fit-content" }}
            />
            <label htmlFor="province">Province</label>
            <input
              type="text"
              id="province"
              placeholder="Enter Province"
              value={province}
              onChange={changeprovince}
              className="form-control form-goup d-inline-block mx-3"
              style={{ maxWidth: "fit-content", margin: "2em" }}
            />
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              value={city}
              placeholder="Enter your city"
              onChange={changecity}
              className="form-control form-goup d-inline-block mx-3"
              style={{ maxWidth: "fit-content" }}
            />{" "}
            <br />
            <br />
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              value={age}
              placeholder="Enter your age"
              onChange={changeage}
              className="form-control form-goup d-inline-block mx-3"
              style={{ maxWidth: "fit-content" }}
            />{" "}
            <label htmlFor="allergy" style={{ width: "max-content" }}>
              Allergies (if any):
            </label>
            <input
              type="text"
              id="allergy"
              value={allergy}
              placeholder="Enter Allergy"
              onChange={changeallergy}
              className="form-control form-goup d-inline-block mx-3"
              style={{ maxWidth: "fit-content" }}
            />{" "}
            <label htmlFor="weight">Weight:</label>
            <input
              type="number"
              id="weight"
              value={weight}
              placeholder="Enter your weight"
              onChange={changeweight}
              className="form-control form-goup d-inline-block mx-3"
              style={{ maxWidth: "fit-content" }}
            />{" "}
            <br />
            <br />
            <br />
            <label htmlFor="pharmacy">Pharmacy:</label>
            <input
              type="text"
              id="pharmacy"
              value={pharmacy}
              placeholder="Enter any pharmacy"
              onChange={changepharmacy}
              className="form-control form-goup d-inline-block mx-3"
              style={{ maxWidth: "fit-content" }}
            />{" "}
            <label htmlFor="currentdoctor" style={{ width: "max-content" }}>
              Current Doctor:
            </label>
            <input
              type="text"
              id="currentdoctor"
              value={currentdoctor}
              placeholder="Enter your current doctor"
              onChange={changecurrentdoctor}
              className="form-control form-goup d-inline-block mx-3"
              style={{ maxWidth: "fit-content" }}
            />{" "}

            <br /><br /><br />
            {/* <option value="option1">{getproviders[0].name}</option>
                <option value="option2">{getproviders[1].name}</option> */}

            <div>
              <h2>Please select a Provider:</h2>
              <select value={selectedDoctor} onChange={handleDropdownChange}>
                <option value="">Select...</option>
                {getproviders.map((items,index)=>{
                  return(
                    <>
                    <option value={items.name} >{items.name}</option>
                    </>
                  )
                })}
                
              </select>
              {selectedDoctor && <p>You have selected: {selectedDoctor}</p>}
            </div>
            <br />
            <br /><br /><br /><br />
            <input
              type="radio"
              id="genders"
              name="fav_language"
              value="Male"
              onClick={changegender}
              style={{ maxWidth: "fit-content", margin: "0" }}
            />{" "}
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              id="genders"
              name="fav_language"
              value="Female"
              onClick={changegender}
              style={{ maxWidth: "fit-content", margin: "0" }}
            />{" "}
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              id="genders"
              name="fav_language"
              value="Other"
              onClick={changegender}
              style={{ maxWidth: "fit-content", margin: "0" }}
            />{" "}
            <label htmlFor="other">Other</label>
            <br />
            <br />
            <br />
            <div className="container">
              <h3>Select service you want</h3>
              <br />
              <br />
              <select
                name="select"
                id="dropdown-basic"
                onChange={changeservice}
                defaultValue="option1"
              >
                <option disabled hidden selected value="option1">
                  Select
                </option>
                <option value="ADD/ADHD Treatment">ADD/ADHD Treatment</option>
                <option value="Anxiety Treatment">Anxiety Treatment</option>
                  <option value="Depression Treatment">
                    Depression Treatment
                  </option>
                  <option value="Insomnia Treatment">Insomnia Treatment</option>
                  <option value="ESA Letter">ESA Letter</option>
              </select>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Calendar
              setapplieddate={setapplieddate}
              applieddate={applieddate}
            />
            <center>
              <input
                type="submit"
                className="btn btn-danger btn-block"
                value="Submit"
                style={{ textAlign: "center", marginLeft: "6rem" }}
              />
            </center>
          </form>
        </div>
      </center>
    </>
  );
};

export default Forms;
