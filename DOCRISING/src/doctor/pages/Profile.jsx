import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import docavv from "./docav.png";
import axios from "axios";
function Profile({ setdocdetails }) {
  const [getusers, setgetusers] = useState([]);

  useEffect(() => {
    const fetchuser = async () => {
      console.log(localStorage.getItem("token"));
      try {
        const response = await axios.get(
          "http://localhost:5000/api/auth/getuser",
          {
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("token"),
            },
          }
        );
        setgetusers(response.data);
      } catch (error) {
        console.log("cant find any user");
      }
    };

    fetchuser();
  }, []);

  console.log(getusers);
  setdocdetails(getusers);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div>
        <h3 style={{ color: "green", padding: "20px" }}>
          <b>Profile</b>
        </h3>
        <div>
          <img
            style={{ width: "220px", height: "220px" }}
            src={docavv}
            alt="docavv"
          />
        </div>
        <div style={{ padding: "20px" }}>
          {getusers ? (
            <div>
              <h1>Dr.{getusers.name}</h1>
              <h5>ID:</h5> <h5 style={{ color: "green" }}> {getusers._id}</h5>
              <br></br>
              <h5>Email:</h5>{" "}
              <h5 style={{ color: "blue" }}> {getusers.email}</h5> <br></br>
              <h5>Qualification:</h5>{" "}
              <h5 style={{ color: "purple" }}>{getusers.qualification}</h5>
              <br></br>
              <h5>Specialization:</h5>{" "}
              <h5 style={{ color: "purple" }}>{getusers.specialization}</h5>
              <br></br>
              <h5>phoneNo:</h5>{" "}
              <h5 style={{ color: "purple" }}> {getusers.phoneNo}</h5>
            </div>
          ) : (
            <p>Loading user data...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
