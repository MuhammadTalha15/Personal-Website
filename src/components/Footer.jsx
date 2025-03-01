import React, { useEffect } from 'react'
import '../styles/footer.css'
import {FooterLogo, Facebook, Instagram, Github, Stack } from './imports'
import { Link, useLocation } from 'react-router-dom'
import arrow from '../assets/Icons/up-arrow.png'

const Footer = () => {
  const date = new Date();
  let currentYear = date.getFullYear();

  const path = useLocation();
  useEffect(() => {
    scrollFooterTop();
  }, [path]);

  const scrollFooterTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <section className="footer">

        {/* <button className="scroll-up-btn" role='button' onClick={scrollFooterTop}>
          <img src={arrow} alt="" className="scroll-img" />
        </button> */}

        <div className="uppr-txt-cnt">
          <div className="txt-cnt">
            <p className="ftr-upr-txt">Your Vission, My Expertise Feel free to Contact for your Solutions and Products.</p>
          </div>
        </div>
        <div className="ftr-lgo-cnt">
          <img className='ftr-lgo' src={FooterLogo} alt="Footer Logo" />
        </div>
        <div className="ftr-nav-cnt">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Projects">Projects</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </div>
        <div className="ftr-scl-lnk-cnt">
          <ul className='scl'>
            <li><a title='Facebook' href="https://www.facebook.com/profile.php?id=100092518021987" target='_blank'><img className='ftr-scl-img' src={Facebook} alt="" /></a></li>
            <li><a title='Instagram' href="https://www.instagram.com/ttlha._15/" target='_blank'><img className='ftr-scl-img' src={Instagram} alt="" /></a></li>
            <li><a title='Github' href="https://github.com/MuhammadTalha15" target='_blank'><img className='ftr-scl-img' src={Github} alt="" /></a></li>
            <li><a title='StackOverflow' href="https://stackoverflow.com/users/23203699/muhammad-talha" target='_blank'><img className='ftr-scl-img' src={Stack} alt="" /></a></li>
          </ul>
        </div>
        <div className="cpy-rht-cnt">
          <p className="cpy-rgt-txt"> Copyright © {currentYear} Website | Muhammad Talha®. All rights reserved. </p>
        </div>
      </section>
    </>
  )
}

export default Footer
