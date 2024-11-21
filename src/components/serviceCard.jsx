import React from 'react'
import '../styles/serviceCard.css'

const ServiceCard = (props) => {
    return (
        <>
            <div className="ser-card">
                <div className="ser-card-cont-cnt">
                    <img src={props.image} alt="" className="ser-card-img" />
                    <h2 className="ser-card-head">{props.heading}</h2>
                    <p className="ser-card-p">{props.description}</p>
                </div>
            </div>
        </>
    )
}

export default ServiceCard
