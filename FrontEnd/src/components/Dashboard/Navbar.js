import React, { useState } from "react";
import Profile from "./Profile";
import Theme from "./Theme";

const Navbar = (props) => {
  const {dark,setDark,leftHide,setLeftHide} = props;
  const { title } = props;

  return (
    <div className="border-b-2 bg-[#fff] dark:bg-[#171717] dark:text-[#f3f3f3] 
                  border-gray-400 dark:border-none rounded-xl slowmo
                  white flex flew-row justify-between items-center h-[4rem] top-navbar z-10 sm:mb-3 mb-1 lg:w-full ">
      <div className="p-2 px-6 text-2xl font-bold text-title">{title}</div>
      <div className="lg:hidden block mr-4">
        <button onClick={()=>{setLeftHide(!leftHide)
          console.log(leftHide)
          }}>
            <span class="material-icons-sharp text-black text-2xl dark:text-white">
              list
            </span>
        </button>
            
      </div>
      <div className="lg:flex justify-center items-center gap-5 md:flex-row flex-col-reverse sm:px-6 hidden">
        <Theme dark={dark} setDark={setDark} />
        <Profile />
      </div>
    </div>
  );
};

export default Navbar;
