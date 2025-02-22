import '../styles/expertiseCard.css'

const ExpertiseCard = (props) => {
  return (
    <>
      <div className="exp-ser-card">
        <div className="exp-ser-card-cont-cnt">
          <img src={props.image} alt="" className="expertise-ico-img" />
          <h2 className="exp-ser-card-head">{props.heading}</h2>
          <p className="exp-ser-card-p">{props.desc}</p>
        </div>
      </div>
    </>
  )
}

export default ExpertiseCard
