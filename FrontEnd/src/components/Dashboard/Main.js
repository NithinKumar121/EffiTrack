import React from 'react'
import Navbar from './Navbar'
import Mid from './Mid'
import Showcase from './Showcase'
import Shimmer from './Shimmer'
import Calender from './Calender'
 const Main = () => {
  return (
    <div className='overflow-hidden h-full px-3 py-2'>
      <div className='overflow-y-auto w-full h-full no-scrollbar '>
        <Navbar/>
        <Shimmer/>
        <Showcase/>
      </div>
       
    </div>
  )
}

export default Main;