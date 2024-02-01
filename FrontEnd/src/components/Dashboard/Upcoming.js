import Leetcode from "../../assets/LeetCode_logo.png";
import CodeChef from "../../assets/codechef.jpeg";
import Codeforces_logo from "../../assets/codeforces.png";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../services/servicehelp";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const tokenName = process.env.REACT_APP_JWT_NAME;

const Contest = (props) => {
  const { onecontestData } = props;

  const helper = (line, val) => {
      const words = line.split(val);
      const firstTwoWords = words.slice(0, 2);
      if(val === 'T'){
        return words[0]
      }
      const result = firstTwoWords.join(' ');
      return line;
  }

  return (
    <>
      <a href={`${onecontestData?.href}`} target="_blank" rel="noreferrer"
        className="contest bg-[#f4f5f6] rounded-lg text-black
                            flex flex-row px-3 py-3 slowmo
                             gap-x-3 items-center next
                             dark:bg-[#333] dark:text-[#f3f3f3] shadow-md hover:shadow-none  p-2"
      >
        <div>
          {
            onecontestData?.resource?.name.includes("codechef") ? 
                <img src={CodeChef} alt="leetcode"className="w-[30px] h-[30px]"></img>
            :
              <img src={Codeforces_logo} alt="leetcode" className="w-[30px] h-[30px]"></img>
          }
          
        </div>
        <div className="grid p-2">
          <div className="flex flex-col ">
            <h1 className="font-semibold text-sm">{helper(onecontestData.event,' ')}</h1>
            <small className="font-medium">{helper(onecontestData.start,'T')} </small>
          </div>
          {/* <h2 className="font-semibold text-base">
            {onecontestData.resource.name}
          </h2> */}
        </div>
      </a>
    </>
  );
};

const Upcoming = () => {
  const myUserDetails = useSelector((state) => state.userDetails);
  const { upcomingContest } = myUserDetails;
  return (
    <>
      <div className="dark:bg-[#1d1d1d] bg-[#fff] px-4 text-[#333] py-4 rounded-xl h-full relative">
        <h1 className="text-center text-2xl font-bold black dark:text-[#f3f3f3]">
          Upcoming Contest
        </h1>
        <div className="overflow-hidden h-[34rem] rounded-xl p-1 mt-3">
          <div className="overflow-y-auto w-full h-full no-scrollbar flex flex-col gap-y-3">
            { upcomingContest &&
              upcomingContest.map((oneContestData) => {
                return <Contest onecontestData={oneContestData} />;
              })}

            {/* <Contest/>
                    <Contest/>
                    <Contest/>
                    <Contest/>
                    <Contest/>
                    <Contest/> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Upcoming;
