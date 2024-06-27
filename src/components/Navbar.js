import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import contacting from '../assets/contact.png';
import { NavLink, useNavigate } from 'react-router-dom';
function Navbar() {
  const navigate=useNavigate();
  const handleNavigate=()=>{
    navigate('/client')
  }
  return (
    <nav className='navbar'>
      <img src={logo} alt="logo " className='logo' />
      <div className='desktopMenu'>
      
        <NavLink to="home"  className='desktopMenuistItem'>HOME</NavLink>
        <NavLink to="about"  className='desktopMenuistItem'>ABOUT</NavLink>
        <NavLink to="portfolio" className='desktopMenuistItem'>PORTFOLIO</NavLink>
        <NavLink to="Client"   className='desktopMenuistItem'>CLIENTS</NavLink>
      </div>
      <button className='desktopMenuBtn' onClick={handleNavigate}>
        <img src={contacting} alt="contact " className='desktopMenuImg' />Contact Me
      </button>
    </nav>
  )
}

export default Navbar