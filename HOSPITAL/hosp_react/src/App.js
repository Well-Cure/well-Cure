import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './component/Home';
 import Navbar from './component/Navbar';
import Login from './component/Login';
import Appo from'./component/Appo';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUp from './component/Signup';
import AppoDetails from './component/AppoDetails';



function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/appo" element={<Appo/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="/appodetails" element={<AppoDetails/>}/>
            
          </Routes>
          <ToastContainer theme="dark" />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App