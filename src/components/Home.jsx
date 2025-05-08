import { useRef, useEffect } from 'react'
import '../styles/home.scss'
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
                <section className="hm">
                    <section className="main-content">
                        <div className="hero-cnt">
                            <div className="dp-cnt">
                                <div className="pic"></div>
                                <p className="text">Always Ready to Provide you Services</p>
                            </div>
                            <h1 className="name">Hi, I'm Muhammad Talha</h1>
                            <p className="brief">
                                As a <span className='highlight'>Web Developer</span> and <span className='highlight'>Designer</span>, I engineer engaging digital solutions that harmonize cutting-edge technology with refined, user-focused design aesthetics.
                            </p>
                            <div className="btn-cnt">
                                
                            </div>
                        </div>
                    </section>
                </section>
            </main>
        </>
    )
}

export default Home
