import React, { useEffect, useState } from "react";

const Theme = (props) => {
  const [light, setLight] = useState(true);
  const handleButton = () => {
    setLight(!light);
    props.setDark(light);
  };

  return (
    <button
      className={`flex ${light ? "flex-row bg-gray-200 " : "flex-row-reverse bg-[#333]"} w-16  rounded-2xl p-1 shadow-sm`}
      onClick={handleButton}
    >
      <div className="flex justify-center items-center dark:bg-[#1d1d1d] bg-white p-1 w-[60%] rounded-2xl shadow-lg ease-in-out">
        <span class="material-symbols-outlined">
          {light ? "light_mode" : "dark_mode"}
        </span>
      </div>
    </button>
  );
};

export default Theme;
