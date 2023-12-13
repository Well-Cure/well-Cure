import React from 'react';
import './navbar.css'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
    <div className='navbar'>

      <ul className='nav-menu'>
      <Link to='/'><li>Home</li></Link>
      <Link to='/login'><li>Login</li></Link>
      <Link to='/signup'><li>SignUp</li></Link>
      <Link to='/appo'><li>Appo</li></Link>
      <Link to='/appodetails'><li>AppoDetails</li></Link>

      </ul>
      
    </div>
    </>
  )
}

export default Navbar