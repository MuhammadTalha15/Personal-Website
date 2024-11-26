import React from 'react'
import { useRef, useEffect } from 'react'
import '../styles/home.css'
import '../styles/locomotive-scroll.css'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import LocomotiveScroll from 'locomotive-scroll'
import { Link } from 'react-router-dom';
import ServiceCard from './serviceCard';
import ProjectCard from './projectCard'
import Footer from './Footer'

import Trophy from '../assets/Icons/Trophy.png'
import Bug from '../assets/Icons/Bug.png'
import Light from '../assets/Icons/lightning.png'
import Clock from '../assets/Icons/Clock.png'

import JavascriptLogo from '../assets/Logo/js.png'
import PythonLogo from '../assets/Logo/py.png'

import Facebook from '../assets/Logo/facebook.svg'
import Instagram from '../assets/Logo/instagram.svg'
import Github from '../assets/Logo/github.svg'
import Stack from '../assets/Logo/stack-overflow.svg'

const Home = () => {

    const [text] = useTypewriter({
        words: ['Frontend Developer', 'Backend Developer', 'Web Designer', 'SEO Expert', 'Programmer'],
        loop: {},
        typeSpeed: 80,
        deleteSpeed: 80,
        delaySpeed: 2000,
    });

    const containerRef = useRef(null);

    useEffect(() => {
        // Initialize Locomotive Scroll
        const scroll = new LocomotiveScroll({
            el: containerRef.current,
            smooth: true,
            multiplier: 5, // Scroll speed
            class: 'is-reveal', // Class applied to elements on reveal
            smoothMobile: true
        });

        // Clean up Locomotive Scroll on unmount
        return () => {
            scroll.destroy();
        };
    }, []);

    return (
        <>
            <main ref={containerRef} data-scroll-container>
                <section className="hero">
                    <div className="cont-cnt">
                        <h1 className="greet">Hello, I am</h1>
                        <h2 className="name">Muhammad Talha</h2>
                        <h2 className="prof">{text}<Cursor /></h2>
                        <p className="des">Experienced Web Developer, Designer. Programmer, SEO Expert and a Passionate Student.</p>
                        <p className="note">Currently Seeking for Freelance Projects</p>
                        <div className="btn-cnt">
                            <Link to='#' target='_blank' className='active hero-btn'>Resume</Link>
                            {/* <Link to='#' target='_blank' className='hero-btn'>Explore Work</Link> */}
                        </div>
                    </div>
                </section>

                <section className='sec-section'>
                    <h1 className="sec-section-sub-head">SERVICES</h1>
                    <h2 className="sec-section-mn-head">Exceeding Expectations</h2>
                    <p className="sec-section-des">Offering bespoke web development solutions that blend innovation with precision to elevate your digital presence.</p>
                    <div className="crd-cnt">
                        <ServiceCard image={Trophy} heading={'Expertise in Figma to Websites'} description={'Seamlessly transform your designs from Figma to fully functional websites with my expertise, ensuring pixel-perfect precision and responsive interactivity.'} />
                        <ServiceCard image={Bug} heading={'Comprehensive Testing'} description={'Ensure your projects are robust and error-free with my comprehensive testing services, covering functionality, performance, and user experience.'} />
                        <ServiceCard image={Light} heading={'Interactivity and Responsiveness'} description={'Enhance user experience with dynamic interactivity and seamless responsiveness, ensuring your website looks and performs flawlessly on all devices.'} />
                        <ServiceCard image={Clock} heading={'Product Delivery on Time'} description={'Depend on timely and efficient product delivery, ensuring your projects are completed and launched as scheduled without compromising quality.'} />
                    </div>
                </section>

                <section className="thir-section">
                    <h1 className="sec-section-sub-head">PROJECTS</h1>
                    <h2 className="sec-section-mn-head">My Latest Projects</h2>
                    <p className="sec-section-des">Discover My Latest Creations that showcase the Designing Innovations and Digital Essentials. Feel free to Explore for More.</p>
                    <div className="prjct-crd-cnt">
                        <ProjectCard projectLink={'https://www.github.com'} image={JavascriptLogo} projectHeading='Todo List App' projectDescription='A sleek and efficient to-do list app built with vanilla JavaScript, designed to help you manage tasks effortlessly with a clean and intuitive interface.' />
                        <ProjectCard projectLink={'https://www.github.com'} image={JavascriptLogo} projectHeading='Tic Tac Toe Game' projectDescription='A classic Tic Tac Toe game created in vanilla JavaScript, offering a smooth and interactive experience with a simple, user-friendly interface.' />
                        <ProjectCard projectLink={'https://www.github.com'} image={PythonLogo} projectHeading='QR Code Generator' projectDescription='A robust QR code generator built with Python, enabling you to create customized QR codes quickly and easily.' />
                    </div>
                    <Link to='/Projects' className='hero-btn'>More Projects</Link>
                </section>

                <section className='frth-section'>
                    <h1 className="sec-section-sub-head">CONTACT</h1>
                    <h2 className="sec-section-mn-head">Get In Touch</h2>
                    <p className="sec-section-des">Reach out to collaborate or discuss innovative web solutions—I'm here to connect.</p>
                    <div className="contact-cnt">
                        <p className="contact-des">
                            Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and suggestions. If you have a specific question or comment, please feel free to email me directly at <a className='contact-des-a' href="https://mail.google.com">talhaz5518@gmail.com</a>
                        </p>

                        <div className="lnk-cnt">
                            <a href="https://www.facebook.com/profile.php?id=100092518021987" target='_blank' className='scl-a'>
                                <img src={Facebook} alt="" className="scl-lnk-img" />
                                <h3 className="scl-lbl">Follow me on</h3>
                                <h3 className="scl-name">Facebook</h3>
                            </a>
                            <a href="https://www.instagram.com/ttlha._15/" target='_blank' className='scl-a'>
                                <img src={Instagram} alt="" className="scl-lnk-img" />
                                <h3 className="scl-lbl">Follow me on</h3>
                                <h3 className="scl-name">Instagram</h3>
                            </a>
                            <a href="https://github.com/MuhammadTalha15" target='_blank' className='scl-a'>
                                <img src={Github} alt="" className="scl-lnk-img" />
                                <h3 className="scl-lbl">Follow me on</h3>
                                <h3 className="scl-name">Github</h3>
                            </a>
                            <a href="https://stackoverflow.com/users/23203699/muhammad-talha" target='_blank' className='scl-a'>
                                <img src={Stack} alt="" className="scl-lnk-img" />
                                <h3 className="scl-lbl">Follow me on</h3>
                                <h3 className="scl-name">Stack-Overflow</h3>
                            </a>
                        </div>

                        <Link to="/Contact" className='contact-btn'>Contact Me <span className='arrow'></span></Link>

                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}

export default Home
