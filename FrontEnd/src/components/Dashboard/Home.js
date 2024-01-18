import React, { useEffect, useState } from 'react'
import Leftnav from './Leftnav'
import Main from './Main'
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getCookie } from '../../services/servicehelp';
import { changeUserDetails } from '../../redux/userSlice';

const tokenName = process.env.REACT_APP_JWT_NAME;

function isValidDateString(dateString) {
  const inputDate = new Date(dateString);
  // Get current date
  const currentDate = new Date();
  // Check if the year matches the current year
  const inputYear = inputDate.getFullYear();
  if (inputYear !== currentDate.getFullYear()) {
    return false;
  }

  // Check if the date is present or future
  if (inputDate < currentDate) {
    return false;
  }

  return true;
}


const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [contest,setContest] = useState({});
    useEffect(()=>{
          checkAuth();
    },[]);
    const checkAuth = async() =>{
      const authToken = getCookie(tokenName);
      console.log(authToken)
      if(!authToken){
        navigate('/login');
      }
      else{
        try{
          const axiosInstance = axios.create({
            headers: {
              common: {
                Authorization: `Bearer ${authToken}`
              }
            }
          });

          const lcresponse = await axiosInstance.get(`${process.env.REACT_APP_BASE_URL}/user/`);
          dispatch(changeUserDetails(lcresponse.data.message))
          // const currentContest = lcresponse.data.message.objects.filter((contest)=>{
          //   return isValidDateString(contest.start) == true;
          // })
          // setContest(currentContest);
        } catch(error){
            console.log(error.message);
        }
      }
    }

    const [display, setDisplay] = useState('dashboard');



  return (
    <>
        <div className='home_section bg-gray-300 h-full lg:h-[100vh] scrollbar-hide overflow-hidden'>
          <Leftnav display = {display} setDisplay={setDisplay}/>
          <Main display = {display}/>
        </div>  
    </>
   
  )
}

export default Home;