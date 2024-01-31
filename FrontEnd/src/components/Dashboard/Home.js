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
  const [contest, setContest] = useState({});
  const [display, setDisplay] = useState("dashboard");

  const commonDetails = useSelector((store)=>store.commonDetails);

  const {mode} = commonDetails;
  useEffect(() => {
    changeMode();
    checkAuth();
  }, []);

  
  const changeMode=()=>{
    const modes = getDataFromLocalStorage('mode');
    dispatch(toggleMode(modes));
  }
  const checkAuth = async () => {
    const authToken = getCookie(tokenName);
    if (!authToken) {
      navigate("/login");
    } else {
      try {
        const axiosInstance = axios.create({
          headers: {
            common: {
              Authorization: `Bearer ${authToken}`,
            },
          },
        });
        const lcresponse = await axiosInstance.get(
          `${process.env.REACT_APP_BASE_URL}/user/`,
        );
        dispatch(changeUserDetails(lcresponse.data.message));
      } catch (error) {
        navigate("/login");
      }

      try {
        const axiosInstance = axios.create({
          headers: {
            common: {
              Authorization: `Bearer ${authToken}`,
            },
          },
        });
        const lcresponse = await axiosInstance.get(
          `${process.env.REACT_APP_BASE_URL}/user/upcoming`,
        );

        const currentContest = lcresponse.data.message.objects.filter(
          (contest) => {
            return isValidDateString(contest.start) === true;
          },
        );
        dispatch(changeUpcomingContest(currentContest));
      } catch (error) {
        if(error.response.request.status === 409 || error.response.request.status === 500 || error.response.data.error){
          console.log(error.response.data.message)
        }
      }
    }
  };

  return (
    <>
        
      {/* <div className={`${mode === true ? 'dark' : ''}`}>
        <div className="home_section bg-gray-400 dark:bg-[#484849] h-full lg:h-[100vh] scrollbar-hide overflow-hidden">
          <Leftnav display={display} setDisplay={setDisplay}/>
          <Main display={display} />
        </div>
      </div> */}
      <Main/>
    </>
    
  );
};

export default Home;
