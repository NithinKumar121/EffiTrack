import React, { useEffect, useState } from 'react'
import Leftnav from './Leftnav'
import Main from './Main'
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getCookie } from '../../services/servicehelp';
import { changeUserDetails } from '../../redux/userSlice';
import LeetcodeSlice from '../../redux/LeetcodeSlice';

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
        } catch(error){
            if(error.response.data.error==true){
              navigate('/login');
            }
        }
      }
    }










































    const [display, setDisplay] = useState('dashboard');
    const [dark,setDark] = useState();


  return (
    <div className={dark && 'dark'}>
        <div className='home_section bg-gray-400 dark:bg-[#484849] dark: h-full lg:h-[100vh] scrollbar-hide overflow-hidden'>
          <Leftnav display = {display} setDisplay={setDisplay}/>  
          <Main display = {display} setDark = {setDark}/>
        </div>  
    </div>
   
  )
}

export default Home;