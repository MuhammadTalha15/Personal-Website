import React from 'react'
import '../styles/about.css'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Muhammad Talha</title>
      </Helmet>
      <main className='abt-mn'>
        <section className='abt-sec'>
          <div className="tp-head-cnt">
            <h1 className="head">ABOUT ME</h1>
            <h2 className="head-aftr">Learn More About MySelf</h2>
          </div>
          <div className="abt-cont-cnt">
            <div className="abt-cont abt-txt-cnt">
              <p className="bfr">I am Muhammad Talha, an Intermediate Computer Science student currently studying in college. With a passion for Computer Engineering and Computer Sciences, I am dedicated to enhancing my skills and knowledge in the field.</p>
              <p className="aftr">As an intermediate-level computer science student, I am deeply immersed in various technology projects, showcasing a versatile skill set in web development, desktop applications, and data science. My primary tools include JavaScript, Python, React, Express, MongoDB, and C++.</p>
              <Link to='#' target='_blank' className='abt-hero-btn'>Resume</Link>
            </div>
            <div className="abt-cont">
              <table>
                <tr>
                  <th>Name:</th>
                  <td>Muhammad Talha</td>
                </tr>
                <tr>
                  <th>Date of Birth:</th>
                  <td>18 July 2007</td>
                </tr>
                <tr>
                  <th>Email:</th>
                  <td>talhaz5518@gmail.com</td>
                </tr>
                <tr>
                  <th>Address:</th>
                  <td>Naval Anchorage, Islamabad</td>
                </tr>
                <tr>
                  <th>Phone:</th>
                  <td>0334-5334-658</td>
                </tr>
                <tr>
                  <th>Language:</th>
                  <td>Urdu, English</td>
                </tr>
              </table>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default About
