import '../styles/education.css'

const EducationCard = (props) => {
  return (
    <>
      <div className="Educard">
        <div className="edu-img">
          <img src={props.image} alt="" className="edu-ico-img" />
        </div>
        <div className="edu-crd-txt-cont">
          <div className="heading">
            <h1 className="edu-inner-heading">{props.heading}</h1>
          </div>
          <div className="subhead">
            <h2 className="inr-subhead">{props.subhead}</h2>
          </div>
          <div className="desc">
            <p className="edu-description">{props.desc}</p>
          </div>
          <div className="time">
            <p className="inr-time">{props.time}</p>
            <a className='link' href="https://www.freecodecamp.org/certification/Muhammad-Talha-Siddiqui/responsive-web-design">{props.link}</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default EducationCard
