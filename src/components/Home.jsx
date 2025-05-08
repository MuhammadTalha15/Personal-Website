import { useRef, useEffect } from 'react'
import '../styles/home.css'
import '../styles/test.scss'
import '../styles/locomotive-scroll.css'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import LocomotiveScroll from 'locomotive-scroll'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'

import { ExpertiseCard, ServiceCard, ProjectCard, Footer } from './imports'
import { Trophy, Bug, Light, Clock, JavascriptLogo, CppLogo, Facebook, Instagram, Github, Stack, Coding, Seo, Open, Script } from './imports'

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

        const scroll = new LocomotiveScroll({
            el: containerRef.current,
            smooth: true,
            multiplier: 5,
            class: 'is-reveal',
            smoothMobile: true
        });


        return () => {
            scroll.destroy();
        };
    }, []);

    return (
        <>
            <Helmet>
                <title>Muhammad Talha | Website</title>
            </Helmet>
            <main ref={containerRef} data-scroll-container>
                <section className="hero">
                    <div className="cont-cnt">
                        <h1 className="greet">Hello, I am</h1>
                        <h2 className="name">Muhammad Talha</h2>
                        <h2 className="prof">{text}<Cursor /></h2>
                        <p className="des">Experienced Web Developer, Designer. Programmer, SEO Expert and a Passionate Student.</p>
                        <p className="note">Always ready to provide you services</p>
                        <div className="btn-cnt">
                            <Link to='#' target='_blank' className='active hero-btn'>Resume</Link>
                        </div>
                    </div>
                </section>

                {/*  */}

                <section className='sec-section'>
                    <div className="heading-cnt">
                        <h1 className="sec-section-sub-head">SERVICES</h1>
                        <h2 className="sec-section-mn-head">Exceeding Expectations</h2>
                    </div>
                    <div className="cont-wrapper">

                        <div className="cont-head-cnt">
                            <h2 className="sec-txt-sub">Enhancing your software with precise optimizations and seamless improvements.</h2>
                            <p className="sec-section-des">Delivering tailored web development solutions that seamlessly integrate innovation and technical precision to enhance your digital footprint.</p>
                            <Link to='/About' className='hero-btn'>Learn More</Link>
                        </div>

                        <div className="services-crd-cnt">
                            <ExpertiseCard image={Coding} heading='Website, WebApp Development' desc='Developing responsive, dynamic web applications using advanced frameworks and technologies to ensure optimal performance and user engagement.' />
                            <ExpertiseCard image={Seo} heading='Search Engine Optimization' desc='Optimizing websites with advanced SEO strategies, including keyword research, on-page enhancements, and technical audits, to improve search engine rankings and drive organic traffic.' />
                            <ExpertiseCard image={Script} heading='Scripting and Automation' desc='Developing robust scripts and automation tools to streamline processes, optimize workflows, and handle complex tasks with precision and efficiency.' />
                            <ExpertiseCard image={Open} heading='Open Source Contribution' desc='Actively engaging in open-source projects to enhance software quality, develop innovative features, and foster collaboration within the developer community.' />
                        </div>

                    </div>
                </section>


                {/*  */}


                <section className="thir-section">

                    <div className="heading-cnt">
                        <h1 className="sec-section-sub-head">PROJECTS</h1>
                        <h2 className="sec-section-mn-head">My Latest Projects</h2>
                    </div>

                    <div className="thir-cont-wrapper">

                        <div className="thir-cont-head-cnt">
                            <h2 className="sec-txt-sub">Innovative, Scalable, and Intelligent Solutions for Modern Development.</h2>
                            <p className="sec-section-des">Discover My Latest Creations that showcase the Designing Innovations and Digital Essentials. Feel free to Explore for More.</p>
                            <Link to='/Projects' className='hero-btn'>More Projects</Link>
                        </div>

                        <div className="prjct-crd-cnt">
                            <ProjectCard projectLink={'https://github.com/MuhammadTalha15/Todo-List-App'} image={JavascriptLogo} projectHeading='Todo List App' projectDescription='A sleek and efficient to-do list app built with vanilla JavaScript, designed to help you manage tasks effortlessly with a clean and intuitive interface.' />
                            <ProjectCard projectLink={'https://github.com/MuhammadTalha15/Tic-Tac-Toe'} image={JavascriptLogo} projectHeading='Tic Tac Toe Game' projectDescription='A classic Tic Tac Toe game created in vanilla JavaScript, offering a smooth and interactive experience with a simple, user-friendly interface.' />
                            <ProjectCard projectLink={'https://github.com/MuhammadTalha15/Tic-Tac-Toe-C-'} image={CppLogo} projectHeading='Game in C++' projectDescription='A fully-functional Tic Tac Toe clone developed in C++, providing a seamless and engaging gameplay experience.' />
                        </div>
                    </div>

                </section>

                <section className='frth-section'>
                    <h1 className="sec-section-sub-head">CONTACT</h1>
                    <h2 className="sec-section-mn-head">Get In Touch</h2>
                    <p className="frth-section-des">Reach out to collaborate or discuss innovative web solutions—I'm here to connect.</p>
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
