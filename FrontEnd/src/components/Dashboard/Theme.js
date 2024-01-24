import React, { useEffect, useState } from "react";
import { deleteCookie, getCookie, setCookie ,getDataFromLocalStorage,storeDataInLocalStorage,deleteDataFromLocalStorage } from "../../services/servicehelp";
const Theme = (props) => {
  const {dark,setDark} = props;

  const handleButton = async () => {
    storeDataInLocalStorage('mode',!dark);
    setDark(!dark);
  };

  return (
    <div className="">
        <button
          className={`flex ${dark ? "flex-row-reverse bg-[#333]" : "flex-row bg-gray-200 "} w-16  rounded-2xl p-1 shadow-sm`}
          onClick={handleButton}
        >
        <div className="flex justify-center items-center dark:bg-[#1d1d1d] bg-white p-1 w-[60%] rounded-2xl shadow-lg ease-in-out">
          <span class="material-symbols-outlined">
            {dark ? "dark_mode" : "light_mode"}
          </span>
        </div>
      </button>
    </div>
    
  );
};

export default Theme;
