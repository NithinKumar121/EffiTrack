import React, { useState } from "react";
import temp_logo from "../../assets/temp_logo.jpeg";
import { useSelector } from "react-redux";

const Profile = () => {
  const myUserDetails = useSelector((state) => state.userDetails);
  const { userDetials } = myUserDetails;
  const [role, setRole] = useState("Student");
  return (
    <div className="flex gap-3">
      <div>
        <img src={temp_logo} className="w-[3rem] rounded-[100%]"></img>
      </div>
      <div>
        <div className="text-primary font-medium">{userDetials.username}</div>
        <div className="text-accent">
          <small>{role}</small>
        </div>
      </div>
    </div>
  );
};

export default Profile;
