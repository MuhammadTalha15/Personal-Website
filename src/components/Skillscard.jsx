import '../styles/skillscard.css'

const Skillscard = (props) => {
    return (
        <>
            <div className="skls-card">
                <div className="skls-card-cont-cnt">
                    <img src={props.image} alt="" className="skls-ico-img" />
                    <h2 className="skls-card-head">{props.heading}</h2>
                    <p className="skls-card-p">{props.desc}</p>
                </div>
            </div>
        </>
    )
}

export default Skillscard
