import React, { useState } from 'react'
import Navbar from './Navbar'
import Mid from './Mid'
import Showcase from './Showcase'
import Shimmer from './Shimmer'
import EditProfile from '../ProfilePage/Editprofile'
import Chart from '../highcharts';
import Footer from '../Footer'

 const Main = ( props ) => {
  console.log(props.display)
  const setDark = props.setDark;
  return (
    <div className='overflow-hidden h-full'>
        <div className='overflow-hidden h-full dark:bg-[#333] white p-3 pb-0 '>
          <div className='overflow-y-auto w-full h-full no-scrollbar flex flex-col justify-between'>
            <div>
              <Navbar className='fixed' setDark = {setDark}/>
              {
                props.display  === 'dashboard' ? <div>
                    <Mid/>
                    <Showcase/>
                    <Showcase/>
                    <Showcase/>
                  </div>
                :
                <EditProfile/>
              }
            </div>
            <section>
              <Footer/>
            </section>
          </div>  
        </div>       
    </div>
  )
}

export default Main;