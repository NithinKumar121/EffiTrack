import React  from "react";
import { useState } from "react";
import temp_logo from "../../assets/temp_logo.jpeg";
import { Link } from "react-router-dom";
import LCimage from "../../assets/LeetCode_logo.png";
import CCimage from "../../assets/codechef.jpeg";
import CFimage from "../../assets/codeforces-3.png";
import GithubImg from "../../assets/github_left_bar.png";
import Theme from "./Theme";
import "./dashboard.css";

const Leftnav = (props) => {
  const { display, setDisplay , leftHide , setLeftHide , dark , setDark} = { ...props };
  // const [leftHide,setLeftHide] = useState(false);
  return (
    <aside className={`w-[60%] sm:w-auto text-[#f3f3f3] bg-[#000] dark:bg-[#1d1d1d] h-[100vh]  lg:block lg:relative ${leftHide?'fixed left-0 z-10':'hidden'} overflow-hidden scrollbar-hide`}>
      <div className="top">
        {/* logo  */}
        <div className="logo">
          <img src={temp_logo} className="w-[50px] h-[50px] rounded-full"></img>
          <h1 className="text-3xl font-semibold">
            {" "}
            <span>Effi</span>track
          </h1>
         
        </div>
        <div className="close">
          <button onClick={()=>setLeftHide(false)}>
            <span class="material-icons-sharp">close</span>
          </button>
         
        </div>
      </div>
      <div className="mt-[3rem]">
        <div className="mid-container">
          <div className="left-nav-link">
            <button
              className={`left-nav-a group ${display === "dashboard" ? "l-nav-a-active" : ""}`}
              onClick={() => setDisplay("dashboard")}
            >
              <span className="material-icons-sharp ">dashboard</span>
              <h4 className="group-hover:ml-2 slowmo">DashBoard</h4>
            </button>
          </div>
          <div className="left-nav-link">
            <button
              className={`left-nav-a group ${display === "profile" ? "l-nav-a-active" : ""}`}
              onClick={() => setDisplay("profile")}
            >
              <span class="material-icons-sharp">account_circle</span>
              <h4 className="group-hover:ml-2 slowmo">Profile</h4>
            </button>
          </div>
          <div className={`${!leftHide ? 'hidden' :'left-nav-link w-[80%] mx-auto'} `}>
            <Theme dark={dark} setDark={setDark} />
          </div>
          
          <div className="aside-bottom">
            {/* <div className='left-nav-link'>
              <Link href="#" className='left-nav-a l-nav-a-active'> 
                <span className="material-icons-sharp">settings</span> 
                <h4>Settings </h4>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
      <div className="bottom"></div>
    </aside>
  );
};

export default Leftnav;
