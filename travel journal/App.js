import React from "react"
import Header from "./components/Header"
import Card from "./components/Card"
import cardsData from "./cardData"

export default function App(){
    const cardElements = cardsData.map(function(card){
        return <Card img= {card.imageUrl}
            location={card.location}
            link={card.googleMapsUrl}
            name={card.title}
            start_date={card.startDate}
            end_date={card.endDate}
            desc = {card.description}
                />
                

                    
    })

    return (
        <main>
            <Header/>
            {cardElements}
        </main>
    )
}