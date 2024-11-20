import React from 'react'
import '../styles/home.css'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { Link } from 'react-router-dom';

const Home = () => {

    const [text] = useTypewriter({
        words:['Computer Science Student.', 'Web Developer.', 'Programmer.'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 100,
        delaySpeed: 2000,
    });
  return (
    <>
        <section className="hero">
            <div className="cont-cnt">
                <h1 className="greet">Hello, I'm</h1>
                <h2 className="name">Muhammad Talha</h2>
                <h2 className="prof">Web Developer</h2>
                <p className="des">Experienced Web Developer, Designer. Programmer, SEO Expert and a Passionate Student.</p>
                <p className="note">Currently Seeking for Freelance Projects</p>
                <div className="btn-cnt">
                    <Link to='#' target='_blank' className='active hero-btn'>Resume</Link>
                    <Link to='#' target='_blank' className='hero-btn'>Explore Work</Link>
                </div>
            </div>
        </section>

        <section className='sec-section'></section>
    </>
  )
}

export default Home
