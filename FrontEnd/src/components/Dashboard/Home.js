import React, { useEffect, useState } from 'react'
import Leftnav from './Leftnav'
import Main from './Main'
import {useDispatch} from 'react-redux';
import {addLcContest, addLcData} from '../../redux/LcSlice';
import {addCodeForceCount,addCodeForceRating} from '../../redux/codeforcesSlice';
import Shim from './Shimmer';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import Cookies from 'js-cookie';
const Home = () => {
    const dispatch = useDispatch();
    const [flag,setflag] = useState(0);

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