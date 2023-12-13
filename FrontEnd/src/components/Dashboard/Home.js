import React, { useEffect } from 'react'
import Leftnav from './Leftnav'
import Main from './Main'

const Home = () => {
  useEffect(()=>{
    FetchLeetcode();
  },[]);

  const FetchLeetcode = async ()=>{
    const response = await fetch("",{
      method:"POST",
      headers:"application/json",
      body:JSON.stringify({username:"arulcibi007"}),
    })
  }


  return (
    <div className='home_section bg-gray-200'>
        <Leftnav/>
        <Main/>
    </div>
  )
}

export default Home;