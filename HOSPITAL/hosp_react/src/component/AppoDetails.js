import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function AppoDetails() {
    const navigate=useNavigate();
 const [fname, setFName]=useState("");
const [lname, setLName]=useState("");
 const [email, setEmail]=useState("");
 const [password, setPassword]=useState("");
 const [date, setDate]=useState("");
 const [time, settime]=useState("");

 //  Tostify function for alert
const notifyError=(msg)=>toast.error(msg);
const notifySuccess=(msg)=>toast.success(msg);
    
fetch("http://localhost:4444/user", { 
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      fname: fname,
      lname: lname,
      email: email,
      password: password,
      //address:address,
      
      time:time,
      date:date
    })
  }).then(res =>{
    // console.log(res.status)
    // console.log(res.ok)
    return  res.json()
  })//return response callback function 
    .then(data => {
      if (data.error) {
        notifyError(data.error) //show alert
      } else {
        notifySuccess(data.message)
        navigate("/login")
      }
      console.log(data)
    })

     
  
    return (
      <div style={{textAlign:"center", background:"sky blue"}}>
         <h1>Appimonet Table </h1>
         <center>
         <table>
        <thead>
          <tr>
            <th>Date</th>
            <br></br>
            <th>Time</th>
            <br></br>
            <th>Pationname</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {/* {appointment.map(appointment => (
            <tr key={appointment.id}>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>{appointment.username}</td>
              
            </tr>
          ))} */}
        </tbody>
      </table>
      </center>
      </div>
    )
  }
  
 
  

export default AppoDetails;