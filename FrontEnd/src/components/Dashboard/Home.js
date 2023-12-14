import React, { useEffect } from 'react'
import Leftnav from './Leftnav'
import Main from './Main'
import {useDispatch} from 'react-redux';
import {addLcContest, addLcData} from '../../redux/LcSlice';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    FetchLeetcode();
  },[]);

  const FetchLeetcode = async (e)=>{

    var response = await fetch("http://localhost:5000/api/leetcode/count",{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({username:"arulcibi007"}),
    })
    response = await response.json();
    console.log(response);
    dispatch(addLcData(response));

    var responseLcRating = await fetch("http://localhost:5000/api/leetcode/rating",{
      method:"POST",
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify({username:"arulcibi007"}),
    })
    responseLcRating = await responseLcRating.json();
    console.log(responseLcRating);
    dispatch(addLcContest(responseLcRating));
}


  return (
    <div className='home_section bg-gray-200'>
        <Leftnav/>
        <Main/>
    </div>
  )
}

export default Home;