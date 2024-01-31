import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Dashboard/Home";
import Chart from "./components/highcharts";
import { Outlet } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import { toggleMode } from "./redux/commonSlice";
import Leftnav from "./components/Dashboard/Leftnav";

function App() {
  const commonDetails = useSelector((store)=>store.commonDetails);
  const {mode} = commonDetails;
  const [display, setDisplay] = useState("dashboard");
  
  return (
    <>
    <div className={`${mode === true ? 'dark' : ''}`}>
        <div className="home_section bg-gray-400 dark:bg-[#484849] h-full lg:h-[100vh] scrollbar-hide overflow-hidden">
          <Leftnav display={display} setDisplay={setDisplay}/>
          <Outlet/>
        </div>
      </div>
    </>
  );
}



export default App;
