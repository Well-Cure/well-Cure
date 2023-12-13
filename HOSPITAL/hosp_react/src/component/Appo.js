import React,{ useState} from 'react'

import {Link,useNavigate} from "react-router-dom";
import { toast } from 'react-toastify';

// fetch the url
function Appo() {
 const navigate=useNavigate();
 const [fname, setFName]=useState("");
 const [lname, setLName]=useState("");
 const [email, setEmail]=useState("");
 const [password, setPassword]=useState("");
 const [address, setAddress]=useState("");
 const [mobail, setMobail]=useState("");
 const [date, setDate]=useState("MM/DD/YYYY");

//  Tostify function for alert
const notifyError=(msg)=>toast.error(msg);
const notifySuccess=(msg)=>toast.success(msg);

// use Regex for valid email or password 

const passwordRegex=/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;


 const postData=()=>{
//  check Email
if(!passwordRegex.test(password)){
  notifyError("Please Enter Strong Password, one lowercase letters, one uppercase letters, alphanumeric characters, one Special character #,@,?");
  return

}


   // console.log({name,email,userName,password })

   // sending data to server we using fetch
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
        address:address,
        mobail:mobail,
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
  }

   
  return (
    <div className='Appo'>
    <div className='form-container'>
    <div className='form'>
      
         <div>
           <input type="text" name="name" id="name" value={fname} placeholder="First Name" onChange={(e)=>{setFName(e.target.value)}} /> 
        </div>
        <div>
           <input type="text" name="name" id="name" value={lname} placeholder="Last Name" onChange={(e)=>{setLName(e.target.value)}} /> 
        </div>
        <div>
           <input type="email" name="email" id="email" value={email} placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} /> 
        </div>
        <div>
           <input type="password" name="password" id="password" value={password} placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} /> 
        </div>
        <div>
           <input type="number" name="mobail" id="mobail" value={mobail} placeholder="Enter Mobail Number" onChange={(e)=>{setMobail(e.target.value)}} /> 
        </div>
        <div>
           <input type="text" name="name" id="email" value={address} placeholder="Address" onChange={(e)=>{setAddress(e.target.value)}} /> 
        </div>
        <div>
           <input type="date" name="date" id="date" value={date} placeholder="Enter Date" onChange={(e)=>{setDate(e.target.value)}} /> 
        </div>
        

        <p className='loginPara' style={{fontSize: '14px' , margin: "3px 0px"}}></p>
        <input type="submit" id='submit-btn' value="Appoimnet" onClick={()=>{postData()}} />
        </div>
        
        <div className='form2' >
            Already have an Appimonet ? 
            <br></br>
            <Link to='/appodetails'>
            <span style={{color: 'blue', cursor: 'pointer'}} >Appimonet detail.</span>
            </Link>
           
        </div>

    </div>
    </div>
  )
}

export default Appo