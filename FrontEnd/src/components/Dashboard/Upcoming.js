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

const helper = (line, val) => {
    // Split the line into words
    const words = line.split(val);

    // Take the first two words
    const firstTwoWords = words.slice(0, 2);

    if(val === 'T'){
      return words[0]
    }

    // Join the words back into a string
    const result = firstTwoWords.join(' ');

    return result;
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
          <img
            src={CodeChef}
            alt="leetcode"
            className="w-[30px] h-[30px]"
          ></img>
        </div>
        <div className="grid p-2">
          <div className="flex gap-4 items-center">
            <h1 className="font-semibold text-base">{helper(onecontestData.event,' ')}</h1>
            <small className="">{helper(onecontestData.start,'T')} </small>
          </div>
          <h2 className="font-semibold text-base">
            {onecontestData.resource.name}
          </h2>
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
