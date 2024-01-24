import React, { useState } from "react";
import Profile from "./Profile";
import Theme from "./Theme";

const Navbar = (props) => {
  const setDark = props.setDark;
  const { title } = props;
  return (
    <div className="border-b-2 bg-[#fff] dark:bg-[#171717] dark:text-[#f3f3f3] border-gray-400 dark:border-none rounded-xl white flex justify-between items-center h-[4rem] top-navbar z-10">
      <div className="p-2 px-6 text-2xl font-bold text-title">{title}</div>
      <div className="flex justify-center items-center gap-5 md:flex-row flex-col-reverse sm:px-6">
        <Theme setDark={setDark} />
        <Profile />
      </div>
    </div>
  );
};

export default Navbar;
