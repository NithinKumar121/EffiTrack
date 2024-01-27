import React, { useState } from "react";
import Navbar from "./Navbar";
import Mid from "./Mid";
import Showcase from "./Showcase";
import Shimmer from "./Shimmer";
import EditProfile from "../ProfilePage/Editprofile";
import Chart from "../highcharts";
import Footer from "../Footer";

const Main = (props) => {
  console.log(props.display);
  const setDark = props.setDark;
  const {dark,leftHide,setLeftHide} = props;
  return (
    <div className="overflow-hidden lg:h-full h-[100vh]">
      <div className="overflow-hidden h-full dark:bg-[#333] bg-[#e1e1e1] p-3 pb-0 ">
        <div className="overflow-y-auto w-full h-full no-scrollbar flex flex-col justify-between">
          <div>
            {props.display === "dashboard" ? (
              <>
               <Navbar
               className=""
               setDark={setDark}
               title={"Dashboard"}
               dark={dark}
               leftHide={leftHide}
               setLeftHide={setLeftHide}
             />
              <div>
               
                <Mid />
                <Showcase />
              </div>
              </>
            ) : (
              <>
                <Navbar className="" setDark={setDark} title={"Profile"} dark={dark} leftHide={leftHide} setLeftHide={setLeftHide}/>
                <EditProfile />
              </>
            )}
          </div>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Main;
