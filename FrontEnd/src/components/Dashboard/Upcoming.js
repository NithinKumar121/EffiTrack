import Leetcode from "../../assets/LeetCode_logo.png";
import CodeChef from "../../assets/codechef.jpeg";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../services/servicehelp";
import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const tokenName = process.env.REACT_APP_JWT_NAME;

const Contest = (props) => {
  const { onecontestData } = props;
  return (
    <>
      <div
        className="contest bg-[#f4f5f6] rounded-lg text-black
                            flex flex-row px-3 py-3 slowmo
                             gap-x-3 items-center next
                             dark:bg-[#333] dark:text-[#f3f3f3] shadow-md hover:shadow-none"
      >
        <div>
          <img
            src={CodeChef}
            alt="leetcode"
            className="w-[30px] h-[30px]"
          ></img>
        </div>
        <div className="grid">
          <h1 className="font-semibold text-base">{onecontestData.event}</h1>
          <h4 className="font-semibold text-base">{onecontestData.start} </h4>
          <h2 className="font-semibold text-base">
            {onecontestData.resource.name}
          </h2>
        </div>
      </div>
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
