import { useEffect, useState } from "react";
import GitRepo from "../../assets/github.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./dashboard.css";
import { FaRegFolderClosed } from "react-icons/fa6";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";
import { getCookie } from "../../services/servicehelp";
import { useNavigate } from "react-router-dom";


const Favourite = (props) => {
  const { repoDetails } = props;

  return (
    <>
      {
    <a href={repoDetails.url} target="_blank" rel="noopener noreferrer">
      <div className="repo-favourite cursor-pointer bg-[#f4f5f6] text-[#333] dark:bg-[#333] slowmo shadow-xl hover:shadow-none ease-in duration-300 cursor-default dark:text-[#f3f3f3] flex items-center justify-between p-4">
      <div className="flex items-center">
        <img src={GitRepo} alt="github" className="mr-4" />
        <div className="flex-grow pl-4 border-l border-[#000] dark:border-[#FFF] justify-between">
          <p className="font-medium">Repository name : {repoDetails.name}</p>
        </div>
      </div>
    {/* <h6>Stars Earned : 1</h6> */}
    <div>
      <a href={repoDetails.url} target="_blank" rel="noopener noreferrer">
      <FaRegFolderClosed style={{ fontSize: '20px'}} className="mr-2 hover:text-blue-500"></FaRegFolderClosed>
    </a>
  </div>
</div>
</a>

        // :
        // <div className="h-[4rem] repo-favourite bg-[#f4f5f6] text-[#333] dark:bg-[#333] shadow-xl hover:shadow-none ease-in duration-300 cursor-default dark:text-[#f3f3f3]">
        //   {/* emtpy shimmer */}
        // </div>
      }
    </>
  );
};

const Social = (props) => {
  const {platform, url} = {...props};
  return (
    <>
      <Link to={url} target="_blank" rel="noopener noreferrer" className="h-[4rem] cursor-pointer social-media shadow-xl hover:shadow-none ease-in duration-300 bg-[#f4f5f6] dark:bg-[#333] dark:text-white text-[#333]">
        <img src={GitRepo} alt="github" className="w-[40px] h-[40px]"></img>
        <div className="social-media-inner">
          <h4>{platform}</h4>
        </div>
      </Link>
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

  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [LinkedIn, setLinkedIn] = useState("unknown");
  // const [GitHub, setGitHub] = useState("unknown");
  const [Twitter, setTwitter] = useState("unknown");
  const [Reddit, setReddit] = useState("unknown");
  
  const myUserDetails = useSelector((store) => store.userDetails);
  const { userDetials } = myUserDetails;

  useEffect(()=>{
    setLinkedIn(userDetials.socialMedia?.linkedIn)
    setTwitter(userDetials.socialMedia?.twitter)
    setReddit(userDetials.socialMedia?.reddit)
  },[userDetials.socialMedia.linkedIn, userDetials.socialMedia.twitter, userDetials.socialMedia.reddit])


  const handleSubmit = async() =>{

    const authToken = getCookie(process.env.REACT_APP_JWT_NAME);
    if (!authToken) {
      navigate("/login");
    } else {
      try {
        const axiosInstance = axios.create({
          headers: {
            common: {
              Authorization: `Bearer ${authToken}`,
            },
          },
        });

        const response = await axiosInstance.post(
          `${process.env.REACT_APP_BASE_URL}/socialMedia`,
          {
            LinkedIn,Twitter,Reddit
          }
        );
        setShow(!show);
      } catch (error) {
        console.log("error in authentication", error);
      }
    }
  }

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
        <div className="showcase-socails bg-[#fff] dark:bg-[#1d1d1d] dark:text-[#f1f1f1] rounded-xl p-3 relative">
          <h1>Add Your Social Media Links</h1>
          <div className="socail-medias h-[13rem] overflow-auto no-scrollbar">
            {
              (userDetials.socialMedia.linkedIn !== "unknown")?
              <Social platform = {'LinkedIn'} url={LinkedIn}/>:''
            }
            {
              (userDetials.socialMedia.twitter !== "unknown")?
              <Social platform = {'Twitter'} url={Twitter}/>:''
            }
            {
              (userDetials.socialMedia.reddit !== "unknown")?
              <Social platform = {'Reddit'} url={Reddit}/>:''
            }
          </div>
          <div className="absolute bottom-2 right-2 m-4">
            <Fab color="primary" size="small" aria-label="add" onClick={()=>{setShow(!show)}}>
              <AddIcon />
            </Fab>
          </div>
        </div>
      </div>
      <div className={`fixed inset-0 ${(show)?'block':'hidden'} text-white h-full w-full flex justify-center items-center m-auto`}>
        <div className="bg-[#f3f4f5] dark:bg-[#1d1d1d] m-4 p-4 rounded-lg text-black dark:text-white shadow-xl ">
          <div className="text-lg flex border-b-2 mb-2">
            <div className="p-4">
              Add Your Social Media links
            </div>
            <button onClick={()=>setShow(!show)}>
              <div className="h-6 w-6">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="auto" height="auto" viewBox="0 0 30 30">
                <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
              </svg>
              </div>
            </button>
          </div>
          {/* <div className="flex gap-2 items-center p-2">
            <div>
              link
            </div>
            <TextField id="outlined-basic" label="GitHub - url" variant="outlined" className="bg-white dark:bg-[#333]" onChange={(e)=>{setGitHub(e.target.value)}}/>
          </div> */}
          <div className="flex gap-2 items-center p-2">
            <div className="h-10 w-10">
            <svg width="auto" height="auto" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2_15398)">
<path d="M218.123 218.127H180.192V158.724C180.192 144.559 179.939 126.324 160.464 126.324C140.708 126.324 137.685 141.757 137.685 157.693V218.123H99.7541V95.9664H136.168V112.66H136.678C144.103 99.9649 157.909 92.3823 172.606 92.9279C211.051 92.9279 218.139 118.216 218.139 151.114L218.123 218.127ZM56.9551 79.2684C44.7982 79.2706 34.9414 69.417 34.9392 57.2599C34.937 45.1028 44.7903 35.2457 56.9472 35.2435C69.104 35.2413 78.9609 45.0949 78.9631 57.252C78.9641 63.0901 76.646 68.6894 72.5187 72.8183C68.3914 76.9472 62.793 79.2673 56.9551 79.2684ZM75.9207 218.127H37.95V95.9664H75.9207V218.127ZM237.033 0.0181122H18.8895C8.57962 -0.0982379 0.12485 8.16042 -0.000976562 18.4705V237.524C0.120542 247.839 8.57463 256.106 18.8895 255.998H237.033C247.369 256.126 255.856 247.859 255.999 237.524V18.4547C255.852 8.12424 247.364 -0.133938 237.033 0.000645315" fill="#0A66C2"/>
</g>
<defs>
<clipPath id="clip0_2_15398">
<rect width="256" height="256" fill="white"/>
</clipPath>
</defs>
</svg>

            </div>
            <TextField id="outlined-basic" label="LinkedIn - url" variant="outlined" className="bg-white dark:bg-[#333]" value={LinkedIn} onChange={(e)=>{setLinkedIn(e.target.value)}} />
          </div>
          <div className="flex gap-2 items-center p-2">
            <div className="h-10 w-10 ">
            <svg width="auto" height="auto" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_2_14693)">
              <path d="M128 256C198.692 256 256 198.692 256 128C256 57.3075 198.692 0 128 0C57.3075 0 0 57.3075 0 128C0 198.692 57.3075 256 128 256Z" fill="#FF4500"/>
              <path d="M213.15 129.22C213.15 118.844 204.759 110.603 194.533 110.603C189.498 110.603 184.919 112.586 181.562 115.792C168.745 106.635 151.195 100.685 131.662 99.9225L140.207 59.941L167.98 65.8916C168.287 72.9117 174.084 78.5579 181.258 78.5579C188.582 78.5579 194.533 72.6073 194.533 65.28C194.533 57.9556 188.582 52.005 181.258 52.005C176.07 52.005 171.49 55.0571 169.354 59.483L138.378 52.9209C137.462 52.7673 136.546 52.9209 135.935 53.3789C135.172 53.8368 134.714 54.5991 134.564 55.515L125.1 100.073C105.263 100.685 87.4084 106.635 74.4377 115.945C71.0813 112.74 66.5017 110.757 61.467 110.757C51.0905 110.757 42.8502 119.148 42.8502 129.374C42.8502 137.003 47.4269 143.411 53.8382 146.313C53.531 148.142 53.3803 149.973 53.3803 151.959C53.3803 180.645 86.7997 203.995 128.001 203.995C169.203 203.995 202.623 180.799 202.623 151.959C202.623 150.127 202.469 148.142 202.165 146.313C208.573 143.411 213.15 136.849 213.15 129.22ZM85.2722 142.495C85.2722 135.171 91.2228 129.22 98.5501 129.22C105.875 129.22 111.825 135.171 111.825 142.495C111.825 149.82 105.875 155.773 98.5501 155.773C91.2228 155.924 85.2722 149.82 85.2722 142.495ZM159.589 177.747C150.433 186.903 133.036 187.514 128.001 187.514C122.813 187.514 105.417 186.749 96.4111 177.747C95.04 176.373 95.04 174.236 96.4111 172.863C97.7849 171.492 99.9211 171.492 101.295 172.863C107.095 178.662 119.303 180.645 128.001 180.645C136.7 180.645 149.059 178.662 154.705 172.863C156.079 171.492 158.215 171.492 159.589 172.863C160.809 174.236 160.809 176.373 159.589 177.747ZM157.146 155.924C149.821 155.924 143.871 149.973 143.871 142.649C143.871 135.324 149.821 129.374 157.146 129.374C164.473 129.374 170.423 135.324 170.423 142.649C170.423 149.82 164.473 155.924 157.146 155.924Z" fill="white"/>
              </g>
              <defs>
              <clipPath id="clip0_2_14693">
              <rect width="256" height="256" fill="white"/>
              </clipPath>
              </defs>
              </svg>

            </div>
            <TextField id="outlined-basic" label="Reddit - url" variant="outlined" className="bg-white dark:bg-[#333]" value={Reddit} onChange={(e)=>{setReddit(e.target.value)}} />
          </div>
          <div className="flex gap-2 items-center p-2">
            <div className="h-10 w-10">
            <svg width="aut0" height="auto" viewBox="0 0 256 209" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_2_14512)">
              <path d="M256 25.4503C246.581 29.6275 236.458 32.4508 225.834 33.7205C236.678 27.2201 245.006 16.9273 248.927 4.66334C238.78 10.6815 227.539 15.0526 215.576 17.4086C205.995 7.20096 192.345 0.822266 177.239 0.822266C148.233 0.822266 124.716 24.3379 124.716 53.3426C124.716 57.459 125.181 61.4676 126.077 65.3115C82.4258 63.1213 43.7257 42.2117 17.8214 10.4362C13.3005 18.1933 10.7104 27.2154 10.7104 36.8406C10.7104 55.0618 19.9835 71.1378 34.0762 80.556C25.4661 80.2835 17.3682 77.921 10.2863 73.9872C10.2825 74.2063 10.2825 74.4264 10.2825 74.6474C10.2825 100.095 28.3867 121.323 52.4136 126.147C48.006 127.347 43.3661 127.989 38.5756 127.989C35.1915 127.989 31.901 127.66 28.6948 127.047C35.3778 147.913 54.7742 163.098 77.757 163.522C59.782 177.608 37.1354 186.005 12.5289 186.005C8.28987 186.005 4.10888 185.757 0 185.272C23.2431 200.173 50.8507 208.868 80.5109 208.868C177.117 208.868 229.944 128.837 229.944 59.4329C229.944 57.1556 229.893 54.8904 229.792 52.6384C240.053 45.2334 248.958 35.9828 256 25.4503Z" fill="#55ACEE"/>
              </g>
              <defs>
              <clipPath id="clip0_2_14512">
              <rect width="256" height="209" fill="white"/>
              </clipPath>
              </defs>
            </svg>
            </div>
            <TextField id="outlined-basic" label="Twitter - url" variant="outlined" className="bg-white dark:bg-[#333]" value={Twitter} onChange={(e)=>{setTwitter(e.target.value)}}/>
          </div>
          <div className="flex justify-center m-4">
            <div>
              <Button variant="contained" onClick={handleSubmit}>Continue</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Showcase;
