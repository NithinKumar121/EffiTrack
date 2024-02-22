
import { useState, useEffect } from "react";
import CodeChef from "../../assets/codechef.jpeg";
import Codeforces_logo from "../../assets/codeforces.png";
import Leetcode_logo from "../../assets/jpg/LeetCode_logo.jpg"
import atCoder_logo from "../../assets/jpg/atcoder.jpg"
import geekforgeeks_logo from "../../assets/svg/gglogo.svg"
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';

const Contest = (props) => {
  const { onecontestData } = props;

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
            onecontestData?.resource?.name?.includes("codechef") ? 
                (<img src={CodeChef} alt="codechef"className="w-[30px] h-[30px]"></img>)
            :
            onecontestData?.resource?.name?.includes("codeforces") ?
            (<img src={Codeforces_logo} alt="codeforces" className="w-[30px] h-[30px] "></img>)
            : 
            onecontestData?.resource?.name?.includes("leetcode") ?
            (<img src={Leetcode_logo} alt="leetcode" className="w-[30px] h-[30px]"></img>)
            : 
            onecontestData?.resource?.name?.includes("atcoder") ?
            (<img src={atCoder_logo} alt="atcoder" className="w-[30px] h-[30px] "></img>)
            : onecontestData?.resource?.name?.includes("geeksforgeeks") ?
            (<img src={geekforgeeks_logo} alt="atcoder" className="w-[30px] h-[30px] "></img>)
            : <></>
          }
          
        </div>
        <div className="grid p-2">
          <div className="flex flex-col ">
            <h1 className="font-semibold text-sm">{onecontestData.contestName}</h1>
            <small className="font-medium">{onecontestData.contestDate} </small>
          </div>
        </div>
      </a>
    </>
  );
};

Contest.propTypes = {
  onecontestData: PropTypes.object, // Check if the prop is an object
};


const ContestFilter = (props) =>{
    const {platformNeed} =props;
    // const [isChecked,setChecked] = useState(false);
    let n = localStorage.getItem(platformNeed);
    console.log(n);
    const handleCheckBoxChange = () =>{
      localStorage.setItem(platformNeed, !n);
      n = !n;
    }
    const [isChecked,setChecked] = useState(n);
    useEffect(()=>{
      setChecked(n);
    },[n])

    return <>
      <div target="_blank" rel="noreferrer"
        className="contest bg-[#f4f5f6] rounded-lg text-black
                            flex flex-row px-3 py-3 slowmo
                             gap-x-2 items-center next
                             dark:bg-[#333] dark:text-[#f3f3f3] shadow-md hover:shadow-none  p-2"
      >
        <div className="w-[2.5rem] rounded-full overflow-hidden">
            <img src={Codeforces_logo} className="p-2"></img>
        </div>
        <div className="grid grid-cols-2 w-full font-sm text-lg items-center">
          <p className="w-[80%] mx-auto">{platformNeed}</p>
          <input
            type="checkbox"
            className="w-[1.3rem] h-[1.3rem]"
            checked={isChecked}
            onChange={handleCheckBoxChange}
          >
          </input>
  
        </div>
      </div>
    </>
}



const Upcoming = () => {
  const myUserDetails = useSelector((state) => state.userDetails);
  const { upcomingContest } = myUserDetails;
  console.log('upcoming Contest', upcomingContest);
  const platformList = ["leetcode","codechef","codeforces"];
  const [twoToggle,setTwoToggle] = useState(1);

  const [ contestDetails, SetContestDetails ] = useState([]); //this is the sorted contest details
  useEffect(()=>{
    var contest = [];
    const helper = (line, val) => {
      if(line.includes("AtCoder")){
          const spliting = line.split("AtCoder");
          var res = spliting[1];
          res.trim();
          res = res.substring(0,res.length-1)
          return "AtCoder "+res;
      }
      const words = line.split(val);
      const firstTwoWords = words.slice(0, 2);
      if(val === 'T'){
        return words[0]
      }
      const result = firstTwoWords.join(' ');
      return line;
    }
    upcomingContest.forEach(element => {
      contest.push(
        {
          "contestName": helper(element.event,' '),
          "contestDate" : helper(element.end, 'T'),
          "resource": element.resource,
          "href": element.href,
        }
      ) 
      console.log(element)
    });
    contest.sort((a, b) => new Date(a.contestDate) - new Date(b.contestDate));
    SetContestDetails(contest)
    console.log("checking:",contestDetails);
  },[upcomingContest])
  return (
    <>
      <div className="dark:bg-[#1d1d1d] bg-[#fff] px-4 text-[#333] py-4 rounded-xl h-full relative w-full">
        <div className="text-white grid grid-cols-2 text-center">
            <button className="w-[50%] mx-auto" onClick={()=>setTwoToggle(1)}>  
                  Upcoming
            </button>
            <button className="w-[50%] mx-auto" onClick={()=>setTwoToggle(0)}>
                  Filter
            </button>
        </div>
        <div className="overflow-hidden h-[34rem] rounded-xl p-1 mt-3">
          <div className="overflow-y-auto w-full h-full no-scrollbar flex flex-col gap-y-3">
          {
              twoToggle ? <>
                  { contestDetails &&
                   contestDetails.map((oneContestData) => {
                  return <Contest onecontestData={oneContestData} />;
              })}
              </> :
              <>
                {
                  platformList.map((platformNeed)=>{
                    return <ContestFilter platformNeed={platformNeed}/>
                  })
                }
                
              </>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Upcoming;
