import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getCookie } from "../../services/servicehelp";
import { useNavigate } from "react-router-dom";
import './publicStats.css'

const PublicStats = () =>{
    const {id} = useParams();
    const navigate = useNavigate();
    const [effiUsername,setEffiUsername] = useState(undefined);
    const [userNotFound,setUserNotFound] = useState(false);
    const submitButton=async()=>{
        if(effiUsername===undefined){
            setUserNotFound(true);
        }else{
          
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

                
                    const lcresponse = await axiosInstance.post(
                        `${process.env.REACT_APP_BASE_URL}/user/`,{username:effiUsername}
                    );
                    setUserNotFound(false);
                    navigate(`/usernameSearch/${effiUsername}`)
                }
                 catch (error) {
                    setUserNotFound(true);
                }
            }
        }
    }   
    return(
        <>
            <div className="w-full h-[80.5vh] flex justify-center items-center bg-white dark:bg-[#1d1d1d] text-black dark:text-white rounded-xl shadow-xl ">
                <div className="w-full text-center flex flex-col gap-y-7">
                    <div className="py-3 flex flex-col gap-y-4">
                        <div className="flex flex-row gap-x-4 justify-center items-center">
                            <img src={
                                "https://i.ibb.co/0YBRzmJ/temp-logo.jpg"} className="w-[3rem] h-[3rem] rounded-full"></img>
                            <h1 className="text-3xl font-bold">Effitrack Username</h1>
                        </div>
                        
                        <p className="text-xl font-medium">Explore your friends growth !</p>
                    </div>
                    <div className="flex flex-row gap-x-4 justify-center">
                        <input type="text" onChange={(e)=>setEffiUsername(e.target.value)} value={effiUsername} className=" effiuser-input" placeholder="Enter effitrack Username"></input>
                        <button onClick={()=>submitButton()} className="rounded-full bg-black text-white p-3 hover:bg-gray-600 dark:bg-white dark:text-[#333] "><span className="material-icons-sharp flex items-center">arrow_forward</span></button>
                    </div>
                    {
                        userNotFound == true ?
                        <>
                            <div className="">
                                <h1 className="text-red-400 font-semibold">Username Not Found !</h1>
                            </div>
                        </>
                        :
                        <></>
                    }
                </div>
                
            </div>
        </>
    )
}

export default PublicStats;