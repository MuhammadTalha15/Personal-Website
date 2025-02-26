import { useEffect, useRef } from 'react'
import '../styles/about.css'
import '../styles/locomotive-scroll.css'
import LocomotiveScroll from 'locomotive-scroll'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { ExpertiseCard, ServiceCard, EducationCard, SkillsCard, Footer } from './imports.jsx'
import { Trophy, Bug, Light, Clock, JavascriptLogo, CppLogo, School, Coding, Seo, Open, webDevelopment, programming, problemSolving, techskills, teamLead, adaptive, conversation, accountability } from './imports'

const About = () => {

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
        <title>About | Muhammad Talha</title>
        <meta name="description" content="I am Muhammad Talha, an Intermediate Computer Science student currently studying in college. With a passion for Computer Engineering and Computer Sciences, I am dedicated to enhancing my skills and knowledge in the field. As an intermediate-level computer science student, I am deeply immersed in various technology projects, showcasing a versatile skill set in web development, desktop applications, and data science. My primary tools include JavaScript, Python, React, Express, MongoDB, and C++."></meta>
      </Helmet>

      <main ref={containerRef} data-scroll-container>

        <section className='abt-sec'>

          <div className="abt-cont-cnt">

            <div className="abt-txt-cnt">
              <h1 className="head">ABOUT ME</h1>
              <h2 className="head-aftr">Learn More About MySelf</h2>
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

        <section className="abt-second-sec">

          <div className="second-head-cnt">
            <h2 className="second-head">Expertise Area</h2>
          </div>

          <div className="exp-second-page-cont">

            <div className="second-txt-cont-cnt">
              <h2 className='exp-second-sub-head'>Showcasing technical expertise through precision-driven solutions and seamless innovation.</h2>
              <p className="second-des">Delivering comprehensive solutions across development, optimization, and collaboration to create cutting-edge, high-performance web experiences.</p>
            </div>

            <div className="card-cnt">
              <div className="sec-card-wrapper">
                <ServiceCard image={Trophy} heading={'Expertise in Figma to Websites'} description={'Seamlessly transform your designs from Figma to fully functional websites with my expertise, ensuring pixel-perfect precision and responsive interactivity.'} />
                <ServiceCard image={Bug} heading={'Comprehensive Testing'} description={'Ensure your projects are robust and error-free with my comprehensive testing services, covering functionality, performance, and user experience.'} />
                <ServiceCard image={Light} heading={'Interactivity and Responsiveness'} description={'Enhance user experience with dynamic interactivity and seamless responsiveness, ensuring your website looks and performs flawlessly on all devices.'} />
                <ServiceCard image={Clock} heading={'Product Delivery on Time'} description={'Depend on timely and efficient product delivery, ensuring your projects are completed and launched as scheduled without compromising quality.'} />
              </div>
            </div>

          </div>
        </section>

        <section className="abt-edu-sec">
          <div className="edu-head-cnt">
            <h2 className="second-head">Education and Certifications</h2>
          </div>

          <div className="edu-page-cont">
            <div className="sec-edu-txt-cont-cnt">
              <h2 className='exp-second-sub-head'>Establishing a robust technical foundation through Academic achievements and certifications.</h2>
              <p className="second-des">Showcasing academic achievements and the foundational knowledge that drives expertise in Information Technology and Computer Sciences.</p>
            </div>
            <div className="edu-crd-cnt">
              <EducationCard image={School} heading="College Certificate" subhead="Intermediate Computer-Sciences" desc="Bahria College Anchorage, Islamabad" time="(2023 - Present)" />
              <EducationCard image={School} heading="Matriculation Certificate" subhead="Computer-Sciences" desc="Bahria Foundation College Anchorage, Islamabad" time="(2021 - 2022)" />
              <EducationCard image={School} heading="FreeCodeCamp Certificate" subhead="Responsive Web Designs" desc="FreeCodeCamp.org" time="June 1, 2024" link="View Certificate" />
            </div>
          </div>
        </section>

        <section className="skls">
          <div className="skls-head-snt">
            <h2 className="second-head">Hard Skills</h2>
          </div>
          <div className="skl-crd-cnt">
            <SkillsCard image={webDevelopment} heading="Software Development" desc="Designing and developing efficient, scalable, and innovative software solutions tailored to modern technical demands."/>
            <SkillsCard image={programming} heading="Programming Languages" desc="Proficient in multiple programming languages, enabling efficient, scalable, and high-performance software development."/>
            <SkillsCard image={problemSolving} heading="Problem Solving Approach" desc="Analyzing complex challenges and implementing effective, innovative solutions with a strategic approach"/>
            <SkillsCard image={techskills} heading="Technical Writing Skills" desc="Creating clear, concise, and well-structured technical documentation to support development and enhance user understanding."/>
          </div>
        </section>

        <section className="skls">
          <div className="skls-head-snt">
            <h2 className="second-head">Soft Skills</h2>
          </div>
          <div className="skl-crd-cnt">
            <SkillsCard image={teamLead} heading="Leadership Skills" desc="Driving innovation and collaboration with strategic decision-making and technical expertise to lead teams toward success."/>
            <SkillsCard image={adaptive} heading="Task Adaptibility" desc="Adapting to evolving challenges with a strategic, solution-oriented mindset, ensuring efficiency and innovation in dynamic environments."/>
            <SkillsCard image={conversation} heading="Communication " desc="Communicating complex concepts with clarity to foster collaboration and ensure smooth project execution."/>
            <SkillsCard image={accountability} heading="Accountability" desc="Taking ownership of responsibilities, ensuring reliability, and delivering results with integrity and professionalism."/>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

export default About
