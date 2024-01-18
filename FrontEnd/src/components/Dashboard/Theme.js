import React, { useEffect, useState } from 'react'

const Theme = () => {
  const [light, setLight] = useState(true);

  return (
    <button className={`flex ${light?'flex-row':'flex-row-reverse'} w-16 bg-gray-200 rounded-2xl p-1 shadow-sm`} onClick={()=>{setLight(!light)}}>
        <div 
        className='flex justify-center items-center bg-white p-1 w-[60%] rounded-2xl shadow-lg ease-in-out'
        >
            <span class="material-symbols-outlined">
                {light ? 'light_mode':'dark_mode'}
            </span>
        </div>
    </button>
  )
}

export default Theme