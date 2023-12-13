import React,{useState} from 'react';


import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
const navigate=useNavigate();
const [email, setEmail]=useState("");
const [password, setPassword]=useState("");

const notifyError=(msg)=>toast.error(msg);
const notifySuccess=(msg)=>toast.success(msg);

const emailRegex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const postData=()=>{

if(!emailRegex.test(email)){
  notifyError("Invalid Email")
  return
}

  //Sending data to server 
  fetch("http://localhost:4444/login",{
    method:"post",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email:email,
      password:password
    })
  }).then(res=>res.json())
  .then(data=>{
    if(data.error){
        notifyError(data.error)
    }else{
      notifySuccess(data.message)
      console.log(data)
      localStorage.setItem("jwt",data)
      navigate("/")
    }
    console.log(data)
  })  
}

  return (
    <div className='signin'>
    <div className='form-container'>
      <div className='loginForm'>
   
       <div>
        <input type="email" name='email' value={email} id="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
       </div>
       <div>
       <input type="password" name='password' value={password} id="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
       </div>
       <input type="submit" id='login-btn' value="Login" onClick={()=>{postData()}} />
      </div>
      <div className='loginform2'>
      Don't have account ?
      <Link to="/signup">
      <span style={{color: "red", cursor:"pointer"}}>Sign Up</span>
      </Link>
      
      </div>
    </div>   
    </div>
  )
}

export default Login;

