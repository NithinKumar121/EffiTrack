import React from 'react'

const Card = ({card}) => {
    console.log(card);
  return (
    //template literal
    <div className={`card ${card.sub_title}`}>      
        <div className="card-details">
            <div className={`card-details-top ${card.topic} rounded-xl`}>
                <h1>{card.title}</h1>
            </div>
            <h1>{card.sub_title}</h1>
            <h3>Count : {card.count}</h3>
            <h4>Rank : {card.rank}</h4>
        </div>
        <div class="progress">
                <svg >
                    <circle cx="38" cy="38" r="36"></circle>
                </svg>
                <div class="number">
                    <p>{card.comp_percent}</p>
                </div>
        </div>
    </div>
  )
}

export default Card