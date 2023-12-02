import React from 'react'
import Leftnav from './Leftnav'
import Main from './Main'

const Home = () => {
  return (
    <div className='flex flex-row justify-around'>
        <Leftnav/>
        <Main/>
    </div>
  )
}

export default Home;