import React, { useEffect, useState } from 'react'

const Theme = () => {
    
  return (
    <div className={`flex ${light?'flex-row':'flex-row-reverse'} w-20 bg-white rounded-2xl p-1`}>
        <button 
        className='flex justify-center items-center bg-gray-200 p-1 w-[50%] rounded-2xl shadow-md'
        >
            <span class="material-symbols-outlined">
                {light ? 'light_mode':'dark_mode'}
            </span>
        </button>
    </div>
  )
}

export default Theme