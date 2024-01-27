import React from "react";
import temp_logo from "../../assets/temp_logo.jpeg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const GitProfile = ({ modify }) => {
  const githubDetails = useSelector((store) => store.githubDetails);
  const myUserDetails = useSelector((state) => state.userDetails);
  const { GithubProfile } = githubDetails;
  const { userDetials } = myUserDetails;
  return (
    <div className="flex flex-col px-4 gap-y-4 relative mt-3">
      <div className="h-[2.5rem] mt-[0.2rem] flex">
        {" "}
        <h1
          className={`bg-[#253D5B] h-full w-[8rem] rounded-xl flex items-center p-0 pl-2 text-lg font-semibold justify-center dark:bg-[#333] text-[#f3f3f3]`}
        >
          <div>GitHub</div>
        </h1>
      </div>
      <div className="flex flex-col gap-x-8  mt-2">
        <div className="w-full">
          <div className="w-[40%] mx-auto">
            <Link to={`https://github.com/${userDetials?.github}`}>
              <img
                src={GithubProfile.avatar_url}
                alt="github"
                className="rounded-[100%] shadow-lg"
              ></img>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-y-3 mt-4 lg:mb-0 mb-4">
          <div className="text-xl font-medium text-center">
            <h1>{GithubProfile.name}</h1>
          </div>
          <p className="font-semibold ml-2">
            Followers : {GithubProfile.followers}
          </p>
          <p className="font-semibold ml-2">
            Following : {GithubProfile.following}
          </p>
          <p className="font-semibold ml-2">
            Public Repos : {GithubProfile.public_repos}
          </p>
          <p className="font-semibold ml-2">
            Public Gists : {GithubProfile.public_gists}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GitProfile;
