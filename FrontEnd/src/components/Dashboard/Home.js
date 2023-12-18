import React, { useEffect, useState } from 'react'
import Leftnav from './Leftnav'
import Main from './Main'
import {useDispatch} from 'react-redux';
import {addLcContest, addLcData} from '../../redux/LcSlice';
import {addCodeForceCount,addCodeForceRating} from '../../redux/codeforcesSlice';
import Shim from './Shimmer';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

const Home = () => {
    const dispatch = useDispatch();
    const [flag,setflag] = useState(0);
    // var leetcodeCount = useSelector(state => state.Leetcode.LcData);
    // var leetcodeRating = useSelector(state => state.Leetcode.LcContest);
    // var codeforce_count = useSelector(state => state.CodeForce.CFcount);
    // var codeforce_rating = useSelector(state => state.CodeForce.CFrating);
    // useMemo(()=>{
    //   setflag(flag+1);
    //   console.log(flag,leetcodeCount);
    //   console.log(flag,leetcodeRating)
    //   console.log(flag,codeforce_count)
    //   console.log(flag,codeforce_rating)
    // },[leetcodeCount,leetcodeRating]);

    // useEffect(()=>{
    //   FetchLeetcode();
    //   FetchCodeForce();
    // },[]);

 
    // const FetchLeetcode = async ()=>{

    //   var response = await fetch("http://localhost:5000/api/leetcode/count",{
    //     method:"POST",
    //     headers:{
    //       'Content-Type':'application/json'
    //     },
    //     body:JSON.stringify({username:"arulcibi007"}),
    //   })
    //   console.log("response to fetch",response);
    //   response = await response.json();
    //   dispatch(addLcData(response))

    //   var responseLcRating = await fetch("http://localhost:5000/api/leetcode/rating",{
    //     method:"POST",
    //     headers:{
    //       'Content-type':'application/json'
    //     },
    //     body:JSON.stringify({username:"arulcibi007"}),
    //   })
    //   responseLcRating = await responseLcRating.json();
    //   dispatch(addLcContest(responseLcRating));
 
    // }

    // const FetchCodeForce =async () =>{
    //     var resCFcount = await fetch("http://localhost:5000/api/codeforces/count",{
    //       method:"POST",
    //       headers:{
    //         'Content-Type':'application/json'
    //       },
    //       body:JSON.stringify({username:"Cibiyanna26"}),
    //     })
    //     resCFcount = await resCFcount.json();
    //     dispatch(addCodeForceCount(resCFcount));

    //     var resCFrating = await fetch("http://localhost:5000/api/codeforces/rating",{
    //       method:"POST",
    //       headers:{
    //         'Content-type':'application/json'
    //       },
    //       body:JSON.stringify({username:"Cibiyanna26"}),
    //     })
    //     resCFrating = await resCFrating.json();
    //     dispatch(addCodeForceRating(resCFrating));
    //     console.log("second completed");  
    // }


  return (
    <>
      
     
        <div className='home_section bg-gray-200'>
          <Leftnav/>
          <Main/>
        </div>  
      
        
    
    </>
   
  )
}

export default Home;