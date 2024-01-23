import React from 'react';

const Card = ({card}) => {

  return (
    <div>

    
    <div className={`card bg-[#fff] dark:bg-[#1d1d1d] text-[#f3f3f3] shadow-xl hover:shadow`}>      
        <div className="card-details ">
            <div className={`card-details-top bg-[#253D5B] dark:bg-[#333] rounded-xl flex justify-center items-center gap-2`}>
                <img src={card.logo} alt='leetlogo' className='h-5'></img>
                <h1>{card.title}</h1>
            </div>
            <div className='px-2 text-[#333] dark:text-[#f3f3f3]'>
                <h1>{card.sub_title}</h1>
                <h3>Count : {card.count}</h3>
                <h4>Rank : {card.rank}</h4>
            </div>
        </div>
        <div className='flex h-[100px] w-[100px]'>
            <svg width={100} height={100}>
                <g transform='rotate(-90, 50, 50)'>
                    <circle 
                        r="45"
                        cx='50' 
                        cy='50' 
                        fill='transparent'
                        stroke='currentColor'
                        strokeWidth='0.5rem'
                        strokeDasharray={439.8}
                        strokeDashoffset={0}
                        className='text-gray-300 w-[50%] dark:text-gray-600'
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
                        className= 'text-[#2d63f2] dark:text-[#f3f3f3]'
                    >
                    </circle>
                </g>
                <text className='text-xl font-bold' x='50%' y='50%' dominantBaseline="central" textAnchor='middle' fill='gray'>
                    {card.completed_count.toString()+"%".padStart(1,'0')}
                </text>
            </svg>
        </div>
    </div>
    </div>
  )
}

export default Card