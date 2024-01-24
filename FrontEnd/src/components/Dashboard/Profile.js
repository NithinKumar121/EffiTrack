import React, { useState } from "react";
import temp_logo from "../../assets/temp_logo.jpeg";
import { useSelector } from "react-redux";
import {deleteCookie} from "../../services/servicehelp.js";
import './dashboard.css'
const Profile = () => {
  const myUserDetails = useSelector((state) => state.userDetails);
  const githubDetails = useSelector((store) => store.githubDetails);
  const { userDetials } = myUserDetails;
  const { GithubProfile } = githubDetails;
  const [role, setRole] = useState("Student");
  const [subProfile,setSubProfile] = useState(false);

  return (
    <>
      <div className="profile_div">
        <div>
          <img src={GithubProfile.avatar_url} className="w-[3rem] rounded-[100%]"></img>
        </div>
        <div>
          <div className="text-primary font-medium">{userDetials.username}</div>
          <div className="text-accent">
            <small>{role}</small>
          </div>
        </div>
        
        <div className="pop-up subProfile">
          <div className="flex flex-col gap-y-2 cursor-pointer">
              <h1 className="rounded-xl p-1 font-medium">Profile</h1>
              <button 
                className="rounded-xl p-1 font-medium"
                onClick={()=>{
                    deleteCookie(process.env.REACT_APP_JWT_NAME)
                    window.location.reload();
                  }}
                >
                    Logout
            </button>
          </div>
        </div>
          
      
      </div>
    </>
  );
};

export default Profile;
