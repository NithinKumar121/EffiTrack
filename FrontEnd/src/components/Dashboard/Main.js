import React, { useState } from 'react'
import Navbar from './Navbar'
import Mid from './Mid'
import Showcase from './Showcase'
import Shimmer from './Shimmer'
import EditProfile from '../ProfilePage/Editprofile'
import Chart from '../highcharts';

 const Main = () => {
  const [change ,setChange] = useState(true);
  return (
    <div className='overflow-hidden h-full'>
        <Navbar className='fixed'/>
        <div className='overflow-hidden h-[92vh]  white p-3 '>
          <div className='overflow-y-auto w-full h-full no-scrollbar'>
            {
              change  == true ? <div>
                  <Mid/>
                  <Showcase/>
                  <Showcase/>
                  <Showcase/>
                </div>
              :
              <EditProfile/>
            }
          </div>JJF
        </div>       
    </div>
  )
}

export default Main;