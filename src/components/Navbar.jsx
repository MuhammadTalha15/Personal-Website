
import { useState, useEffect } from "react";
import { Logo } from './imports';
import { Link, useLocation } from 'react-router-dom';
import  '../styles/navbar.css';

const Navbar = () => {

  const path = useLocation();
  const [navbarClass, setnavbarClass] = useState('navbar');

  const navbarToggle = () => {
    setnavbarClass((prevClass) => (prevClass === 'navbar') ? 'navbar-active' : 'navbar');
  }

  useEffect(() => {
    setnavbarClass(prevClass => prevClass = 'navbar');
  },[path]);


  return (
    <>
    <header className='header'>
      <Link to="/">
        <img className='logo' src={Logo} alt="Logo" width={'50%'} />
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

      <div className='btnWrpr' onClick={navbarToggle}></div>

    </header>
    </>
  )
}

export default Navbar
