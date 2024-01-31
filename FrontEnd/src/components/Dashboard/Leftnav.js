import React  from "react";
import { useState } from "react";
import temp_logo from "../../assets/temp_logo.jpeg";
import Theme from "./Theme";
import "./dashboard.css";
import { useSelector,useDispatch } from "react-redux";
import { toggleLeftMobileNav } from "../../redux/commonSlice";
import { Link } from "react-router-dom";
const Leftnav = (props) => {
  const dispatch = useDispatch();
  const commonDetails = useSelector((store)=>store.commonDetails)
  const {mobileScreenNav} = commonDetails;
  const [activeButton, setActiveButton] = useState("page1");

  const handleButtonClick = (page) => {
    setActiveButton(page);  
  };
  return (
    <aside className={`w-[60%] sm:w-auto text-[#f3f3f3] bg-[#000] dark:bg-[#1d1d1d] h-[100vh]  lg:block lg:relative ${mobileScreenNav?'fixed left-0 z-10':'hidden'} overflow-hidden scrollbar-hide`}>

      <div className="top">
        <div className="logo">
          <img src={temp_logo} className="w-[50px] h-[50px] rounded-full"></img>
          <h1 className="text-3xl font-semibold">
            {" "}
            <span>Effi</span>track
          </h1>
         
        </div>
        <div className="close">
          <button onClick={()=>dispatch(toggleLeftMobileNav(!mobileScreenNav))}>
            <span class="material-icons-sharp">close</span>
          </button>
        </div>
      </div>

      <div className="mt-[3rem]">
        <div className="mid-container">
          <div className="left-nav-link">
            <Link to={'/'}
            >
              <button className={`left-nav-a group ${activeButton == "page1" ? "l-nav-a-active" : ""}`}
                      onClick={() => handleButtonClick("page1")}
              >
                <span className="material-icons-sharp ">dashboard</span>
                <h4 className="group-hover:ml-2 slowmo">DashBoard</h4>
              </button>
            </Link>
          </div>
          <div className="left-nav-link">
            <Link to={'/profile'} 
            >
              <button className={`left-nav-a group ${activeButton == "page2" ? "l-nav-a-active" : ""}`}
                      onClick={() => handleButtonClick("page2")}
              >
              <span class="material-icons-sharp">account_circle</span>
              <h4 className="group-hover:ml-2 slowmo">Profile</h4>
              </button>
            </Link>
          </div>
          <div className={`${!mobileScreenNav ? 'hidden' :'left-nav-link w-[80%] mx-auto'} `}>
            <Theme/>
          </div>
        </div>
      </div>

      <div className="bottom"></div>

    </aside>
  );
};

export default Leftnav;
