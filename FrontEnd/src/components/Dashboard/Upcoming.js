import Leetcode from '../../assets/LeetCode_logo.png';
import { useNavigate } from "react-router-dom";
import { getCookie } from '../../services/servicehelp';
import axios from 'axios';
import { useEffect } from 'react';
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

const Contest = () =>{
    // useEffect(()=>{
    //     upComing();
    // },[]);
    // const upComing = async () =>{
    //     const authToken = getCookie(tokenName);
    
    //     try{
    //         const axiosInstance = axios.create({
    //           headers: {
    //             common: {
    //               Authorization: `Bearer ${authToken}`
    //             }
    //           }
    //         });
    //         const lcresponse = await axiosInstance.get(`${process.env.REACT_APP_BASE_URL}/user/upcoming`);
    //         console.log(lcresponse);
    //         const currentContest = lcresponse.filter((contest)=>{
    //             return isValidDateString(contest.start) == true;
    //         })
    //         // q
    //       } catch(error){
    //           console.log("upcoming data is not available");
    //       }
    // }
    return  (
        <>
            <div className="contest bg-white rounded-lg text-black
                            flex flex-row px-3 py-3  transition-all slowmo
                             gap-x-3 items-center next">
                    <div>
                        <img src={Leetcode} alt="leetcode" className='w-[30px] h-[30px]'></img>
                    </div>
                    <div className='grid'>
                        <h1 className='font-normal text-base'>Contest Name :</h1>
                        <h4 className='font-normal text-base'>Date : </h4>
                        <h2 className='font-normal text-base'>Platform :</h2>
                    </div>
                </div>
        </>
    )
}

const Upcoming = () =>{
    
    return(
        <>
        <div className='up-bg px-4 text-white py-4 rounded-xl h-full relative'>
            <h1 className="text-center text-2xl font-bold black">Upcoming Contest</h1>
            <div className='overflow-hidden h-[34rem] rounded-xl p-1 mt-3'>
                <div className='overflow-y-auto w-full h-full no-scrollbar flex flex-col gap-y-3'>
                    <Contest/>
                    <Contest/>
                    <Contest/>
                    <Contest/>
                    <Contest/>
                    <Contest/>
                    <Contest/>

                </div>
            </div>
        </div>
        </>
    )
}

export default Upcoming;