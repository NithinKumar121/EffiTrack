import React from 'react'
import Leftnav from './Leftnav'
import Main from './Main'

const Home = () => {
  return (
    <div className='home_section bg-gray-200 h-[100vh]'>
        <Leftnav/>
        <Main/>
    </div>
  )
}

export default Home;