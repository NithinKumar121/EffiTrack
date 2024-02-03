import React, { useEffect, useState } from "react";
import Leftnav from "./Leftnav";
import Main from "./Main";
import { useDispatch , useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getCookie, getDataFromLocalStorage } from "../../services/servicehelp";
import {
  changeUserDetails,
  changeUpcomingContest,
} from "../../redux/userSlice";
import {toggleMode} from '../../redux/commonSlice';

const tokenName = process.env.REACT_APP_JWT_NAME;

function isValidDateString(dateString) {
  const inputDate = new Date(dateString);
  const currentDate = new Date();
  const inputYear = inputDate.getFullYear();
  const inputMonth = inputDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  if (inputYear !== currentYear || inputMonth !== currentMonth) {
    return false;
  }
  const oneMonthLater = new Date(currentDate);
  oneMonthLater.setMonth(oneMonthLater.getMonth() + 1);
  if (inputDate >= oneMonthLater) {
    return false;
  }
  return true;
}


const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    changeMode();
    
  }, []);

  
  const changeMode=()=>{
    const modes = getDataFromLocalStorage('mode');
    dispatch(toggleMode(modes));
  }

  return (
    <>
      <Main/>
    </>
    
  );
};

export default Home;
