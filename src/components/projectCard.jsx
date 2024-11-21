import React from 'react'
import '../styles/projectCard.css'

const ProjectCard = (props) => {
  return (
    <>
      <div className="card">
        <div className="img">
          <img src={props.image} alt="" className="project-ico-img" />
        </div>
        <div className="heading">
          <h2 className="project-inner-heading">{props.projectHeading}</h2>
        </div>
        <div className="description">
          <p className="project-description">{props.projectDescription}</p>
        </div>
        <div className="link">
          <a href={props.projectLink} className="project-link">View Project</a>
        </div>
      </div>
    </>
  )
}

export default ProjectCard
