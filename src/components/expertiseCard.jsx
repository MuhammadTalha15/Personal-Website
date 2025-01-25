import '../styles/expertiseCard.css'

const ExpertiseCard = (props) => {
  return (
    <>
      <div className="ser-card">
        <div className="ser-card-cont-cnt">
          <img src={props.image} alt="" className="expertise-ico-img" />
          <h2 className="ser-card-head">{props.heading}</h2>
          <p className="ser-card-p">{props.desc}</p>
        </div>
      </div>
    </>
  )
}

export default ExpertiseCard
