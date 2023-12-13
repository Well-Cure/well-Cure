import React from 'react';
import './navbar.css'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
    <div className='navbar'>

      <ul className='nav-menu'>
      <Link to='/'><li>Home</li></Link>
      <Link to='/signup'><li>SignUp</li></Link>
      <Link to='/login'><li>Login</li></Link>
      <Link to='/editprofile'><li>Edit Profile</li></Link>
      <Link to='/change'><li>Change Password</li></Link>
      <Link to='/hosp'><li>All Hosp</li></Link>
      <Link to='/allRew'><li>All Reviews</li></Link>
    
    
    
      <Link to='/share'><li>Share Reviews</li></Link>

      </ul>
      
    </div>
    </>
  )
}

export default Navbar
