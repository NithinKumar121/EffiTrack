import React from 'react'
import Navbar from './Navbar'
import Mid from './Mid'
import Showcase from './Showcase'
import Shimmer from './Shimmer'
import Calender from './Calender'
 const Main = () => {
  return (
    <div className='overflow-hidden h-full px-3 py-2'>
        <Navbar className='fixed'/>
        <div className='overflow-hidden h-[90vh] mt-2 p-2'>
          <div className='overflow-y-auto w-full h-full no-scrollbar'>
            <Mid/>
            <Showcase/>
            <Showcase/>
            <Showcase/>
          </div>
        </div>       
    </div>
  )
}

export default Main;