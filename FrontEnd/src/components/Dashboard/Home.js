import React, { useEffect } from 'react'
import Leftnav from './Leftnav'
import Main from './Main'
import {useDispatch} from 'react-redux';
import {addLcContest, addLcData} from '../../redux/LcSlice';
import {addCodeForceCount,addCodeForceRating} from '../../redux/codeforcesSlice';


const Home = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
      FetchLeetcode();
      FetchCodeForce();
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
      dispatch(addLcData(response));

      var responseLcRating = await fetch("http://localhost:5000/api/leetcode/rating",{
        method:"POST",
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify({username:"arulcibi007"}),
      })
      responseLcRating = await responseLcRating.json();
      dispatch(addLcContest(responseLcRating));
    }

    const FetchCodeForce =async () =>{
        var resCFcount = await fetch("http://localhost:5000/api/codeforces/count",{
          method:"POST",
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({username:"Cibiyanna26"}),
        })
        resCFcount = await resCFcount.json();
        dispatch(addCodeForceCount(resCFcount));

        var resCFrating = await fetch("http://localhost:5000/api/codeforces/rating",{
          method:"POST",
          headers:{
            'Content-type':'application/json'
          },
          body:JSON.stringify({username:"Cibiyanna26"}),
        })
        resCFrating = await resCFrating.json();
        dispatch(addCodeForceRating(resCFrating));
    }


  return (
    <div className='home_section bg-gray-200'>
        <Leftnav/>
        <Main/>
    </div>
  )
}

export default Home;