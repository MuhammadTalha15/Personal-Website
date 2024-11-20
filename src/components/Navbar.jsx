import React from 'react'
import  '../styles/navbar.css';
import App from '../App';
import Logo from '../assets/Logo/logo.png'
import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

  const path = useLocation();
  const [headerClass, setheaderClass] = useState('header');
  const [navbarClass, setnavbarClass] = useState('navbar');

  useEffect(() => {
    setheaderClass((prevHead)=> (prevHead === 'header') ? 'header-active' : 'header');
  }, [navbarClass]);

  const navbarToggle = () => {
    setnavbarClass((prevClass) => (prevClass === 'navbar') ? 'navbar-active' : 'navbar');
  }

  useEffect(() => {
    setnavbarClass(prevClass => prevClass = 'navbar');
  },[path]);


  return (
    <>
    <header className={headerClass}>
      <Link to="/">
        <img className='logo' src={Logo} alt="Logo" />
      </Link>
      <nav id='navbar' className={navbarClass}>
        <ul>
          <Link to="/"><li className='nav-li'>Home</li></Link>
          <Link to="/About"><li className='nav-li'>About</li></Link>
          <Link to="/Projects"><li className='nav-li'>Projects</li></Link>
          {/* <Link to="/Articals"><li className='nav-li'>Blogs</li></Link> */}
          <Link to="/Contact"><li className='nav-li'>Contact</li></Link>
        </ul>
      </nav>

      <button className='btnWrpr' onClick={navbarToggle}></button>

    </header>
    </>
  )
}

export default Navbar
