import React, { useState } from "react";
import temp_logo from "../../assets/temp_logo.jpeg";
import { useSelector } from "react-redux";

const Profile = () => {
  const myUserDetails = useSelector((state) => state.userDetails);
  const githubDetails = useSelector((store) => store.githubDetails);
  const { userDetials } = myUserDetails;
  const { GithubProfile } = githubDetails;
  const [role, setRole] = useState("Student");
  return (
    <div className="flex gap-3">
      <div>
        <img src={GithubProfile.avatar_url} className="w-[3rem] rounded-[100%]"></img>
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
