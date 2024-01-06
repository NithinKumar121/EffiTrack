import React, { useEffect, useState } from 'react'
import Leftnav from './Leftnav'
import Main from './Main'
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getCookie } from '../../services/service.help';

const tokenName = process.env.REACT_APP_JWT_NAME;

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
          checkAuth();
    },[]);

    const checkAuth = async() =>{
      const authToken = getCookie(tokenName);
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
          const response = await axiosInstance.get(`${process.env.REACT_APP_BASE_URL}/user/`);
          console.log(response.data);
        } catch(error){
            navigate('/login');
        }
      }
    }


  return (
    <>
        <div className='home_section bg-gray-300 h-full lg:h-[100vh] scrollbar-hide overflow-hidden'>
          <Leftnav/>
          <Main/>
        </div>  
    </>
   
  )
}

export default Home;