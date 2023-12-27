import React from 'react'

const Card = ({card}) => {

  return (
    <div className={`card ${card.sub_title}`}>      
        <div className="card-details">
            <div className={`card-details-top ${card.topic_color} rounded-xl`}>
                <h1>{card.title}</h1>
            </div>
            <h1>{card.sub_title}</h1>
            <h3>Count : {card.count}</h3>
            <h4>Rank : {card.rank}</h4>
        </div>
        <div className='flex h-[100px] w-[100px]'>
            <svg width={100} height={100}>
                <g transform='rotate(-90, 50, 50)'>
                    <circle 
                        r="45"
                        cx='50' 
                        cy='50' 
                        fill='#f9c6cc'
                        stroke='currentColor'
                        strokeWidth='0.5rem'
                        strokeDasharray={439.8}
                        strokeDashoffset={0}
                        className='text-gray-200 w-[50%]'
                    ></circle>
                    <circle
                        r="45"
                        cx='50' 
                        cy='50' 
                        fill='transparent'
                        stroke='currentColor'
                        strokeWidth='0.5rem'
                        strokeDasharray={439.8}
                        strokeDashoffset={440 - (440 * card.completed_count) / (2999)}
                        className= 'text-[#5B6EF7]'
                    >
                    </circle>
                </g>
                <text className='text-xl font-bold' x='50%' y='50%' dominantBaseline="central" textAnchor='middle'>
                    {card.completed_count.toString()+"%".padStart(1,'0')}
                </text>
            </svg>
        </div>
    </div>
  )
}

export default Card