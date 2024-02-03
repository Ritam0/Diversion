// src/components/Navbar.js
import React from 'react';
import {useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './Image/logo.jpg'

const Navbar = () => {
  const [value,setValue]=useState('');
  const [profileUrl,setProfileUrl]=useState('');
  
  useEffect(()=>{
    setValue(localStorage.getItem("email"));
  })
  return (
    <nav className="navbar">
      <Link to="/" className="logo"><img src={logo} alt="" /></Link>
      <ul className="nav-links">
        {value?<li><Link to="/profile">Profile</Link></li>:
        <li><Link to="/auth">Sign In</Link></li>}      
      </ul>
    </nav>
  );
}

export default Navbar;

