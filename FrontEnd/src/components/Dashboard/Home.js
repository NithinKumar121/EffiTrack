import React, { useEffect, useState } from "react";
import Leftnav from "./Leftnav";
import Main from "./Main";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getCookie, getDataFromLocalStorage } from "../../services/servicehelp";
import {
  changeUserDetails,
  changeUpcomingContest,
} from "../../redux/userSlice";
import LeetcodeSlice from "../../redux/LeetcodeSlice";

const tokenName = process.env.REACT_APP_JWT_NAME;

function isValidDateString(dateString) {
  const inputDate = new Date(dateString);
  // Get current date
  const currentDate = new Date();

  // Check if the year and month match the current year and month
  const inputYear = inputDate.getFullYear();
  const inputMonth = inputDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  if (inputYear !== currentYear || inputMonth !== currentMonth) {
    return false;
  }
  // Check if the date is within one month from the current date
  const oneMonthLater = new Date(currentDate);
  oneMonthLater.setMonth(oneMonthLater.getMonth() + 1);

  if (inputDate >= oneMonthLater) {
    return false;
  }

  return true;
}

// function isValidDateString(dateString) {
//   const inputDate = new Date(dateString);
//   // Get current date
//   const currentDate = new Date();
//   // Check if the year matches the current year
//   const inputYear = inputDate.getFullYear();
//   if (inputYear !== currentDate.getFullYear()) {
//     return false;
//   }

//   // Check if the date is present or future
//   if (inputDate < currentDate) {
//     return false;
//   }

//   return true;
// }

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [contest, setContest] = useState({});
  const [display, setDisplay] = useState("dashboard");
  const [dark, setDark] = useState();

  useEffect(() => {
    changeMode();
    checkAuth();
  }, []);


  // useEffect(()=>{

  // },[light])
  const changeMode=()=>{
    const mode = getDataFromLocalStorage('mode');
    setDark(mode);
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
        console.log("error in authentication", error);
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
  const [leftHide,setLeftHide] = useState(false);

  return (
    <>
        {
      dark ? <div className={"dark"}>
              <div className="home_section bg-gray-400 dark:bg-[#484849] h-full lg:h-[100vh] scrollbar-hide overflow-hidden">
                <Leftnav display={display} setDisplay={setDisplay} leftHide={leftHide} setLeftHide={setLeftHide}/>
                <Main display={display} dark={dark} setDark={setDark} leftHide={leftHide} setLeftHide={setLeftHide} />
              </div>
            </div>
        :
        <div className="">
        <div className="home_section bg-gray-400 dark:bg-[#484849] dark: h-full lg:h-[100vh] scrollbar-hide overflow-hidden">
          <Leftnav display={display} setDisplay={setDisplay} leftHide={leftHide} setLeftHide={setLeftHide}/>
          <Main display={display} dark={dark} setDark={setDark}leftHide={leftHide} setLeftHide={setLeftHide} />
        </div>
      </div>
      }
    
    </>
    
  );
};

export default Home;
