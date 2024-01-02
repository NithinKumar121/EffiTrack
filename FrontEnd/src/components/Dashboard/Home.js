import React, { useEffect, useState } from 'react'
import Leftnav from './Leftnav'
import Main from './Main'
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const dispatch = useDispatch();
    const [flag,setflag] = useState(0);
    const navigate = useNavigate();

    useEffect(()=>{
      console.log('helloworld')
    },[]);

  return (
    <>
        <div className='home_section bg-gray-200 h-full lg:h-[100vh] scrollbar-hide overflow-hidden'>
          <Leftnav/>
          <Main/>
        </div>  
    </>
   
  )
}

export default Home;