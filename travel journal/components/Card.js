import React from "react"

export default function Card(props){
    return (
        <section className="card">
            <img src = {props.img} className = "card-image"/>
            <div className = "card-info">
                <div className= "card-info-location">
                    <img src="../assets/pin.svg" />
                    <p>{props.location}</p>
                    <a href={props.link}>View on Google Maps</a>
                </div>
                <h2>{props.name}</h2>
                <p className="card-date">{`${props.start_date} - ${props.end_date}`}</p>
                <p className="description">{props.desc}</p>
            </div>
        </section>
    )
}