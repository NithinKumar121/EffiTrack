import { useEffect, useState } from "react";
import GitRepo from "../../assets/github.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./dashboard.css";

const Favourite = (props) => {
  const { repoDetails } = props;

  return (
    <>
      {
        <div className="repo-favourite bg-[#f4f5f6] text-[#333] dark:bg-[#333] slowmo shadow-xl hover:shadow-none ease-in duration-300 cursor-default dark:text-[#f3f3f3]">
          <img src={GitRepo} alt="github"></img>
          <p>Repo name : {repoDetails.name} </p>
          <h6>Star: 1</h6>
          <Link to={repoDetails.url}>Here !</Link>
        </div>
        // :
        // <div className="h-[4rem] repo-favourite bg-[#f4f5f6] text-[#333] dark:bg-[#333] shadow-xl hover:shadow-none ease-in duration-300 cursor-default dark:text-[#f3f3f3]">
        //   {/* emtpy shimmer */}
        // </div>
      }
    </>
  );
};

const Social = () => {
  return (
    <>
      <div className="social-media shadow-xl hover:shadow-none ease-in duration-300 cursor-default bg-[#f4f5f6] dark:bg-[#333] dark:text-white text-[#333]">
        <img src={GitRepo} alt="github" className="w-[40px] h-[40px]"></img>
        <div className="social-media-inner">
          <h2 className="text-l font-medium">username : Cibiyanna26</h2>
          <h4>Platform : LinkedIn</h4>
        </div>
      </div>
    </>
  );
};

const Showcase = () => {
  const githubDetails = useSelector((store) => store.githubDetails);
  const { userGithubRepo } = githubDetails;
  const [repoDetails, setRepoDetails] = useState("");

  useEffect(() => {
    setRepoDetails(userGithubRepo);
  }, [userGithubRepo]);
  return (
    <>
      <div className="showcase-top">
        <div className="showcase-favourite bg-[#fff] dark:bg-[#1d1d1d] dark:text-[#f3f3f3] text=[#333]  rounded-xl p-3">
          <h1>Your Repository </h1>

          <div className="repo-favourites h-[13rem] overflow-auto no-scrollbar">
            {repoDetails.length > 0 ? (
              <>
                {repoDetails &&
                  repoDetails.map((repo) => {
                    return <Favourite repoDetails={repo} />;
                  })}
              </>
            ) : (
              <div className="h-[4rem] repo-favourite bg-[#f4f5f6] text-[#333] dark:bg-[#333] shadow-xl hover:shadow-none ease-in duration-300 cursor-default dark:text-[#f3f3f3]">
                {/* emtpy shimmer */}
              </div>
            )}
          </div>
        </div>
        <div className="showcase-socails bg-[#fff] dark:bg-[#1d1d1d] dark:text-[#f1f1f1] rounded-xl p-3">
          <h1>Add Your Social Media Links</h1>
          <div className="socail-medias">
            <Social />
            <Social />
          </div>
        </div>
      </div>
    </>
  );
};

export default Showcase;
