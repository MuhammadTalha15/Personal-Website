import '../styles/expertiseCard.css'

const ExpertiseCard = (props) => {
  return (
    <>
      <div className="Expcard">
        <div className="exp-img">
          <img src={props.image} alt="" className="expertise-ico-img" />
        </div>
        <div className="exp-heading">
          <h2 className="expertise-inner-heading">{props.heading}</h2>
        </div>
        <div className="exp-description">
          <p className="expertise-description">{props.desc}</p>
        </div>
      </div>
    </>
  )
}

export default ExpertiseCard
