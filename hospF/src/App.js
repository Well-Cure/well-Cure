import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home';
import Navbar from './components/Navbar';
import EditProfile from './components/EditProfile';
import ChangePassword from './components/ChangePassword';
import Allhosp from './components/Allhosp';

import EditRew from './components/EditRew';


import ShareRew from './components/ShareRew';

import Login from './components/Login';
import SignUp from './components/SignUp';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="signup" element={<SignUp/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="editprofile" element={<EditProfile />} />
            <Route path="change" element={<ChangePassword />} />
            <Route path="hosp" element={<Allhosp />} />
           
            <Route path="editRew" element={<EditRew />} />
           
            
            <Route path="share" element={<ShareRew />} />
            

          </Routes>
          <ToastContainer theme="dark" />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
