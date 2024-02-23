import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaLessThanEqual } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import axios from "axios";
import otpSvg from "../../assets/jpg/otp-validation.jpg";
import {
  setCookie,
  getCookie,
  deleteCookie,
} from "../../services/servicehelp.js";
import './logincred.css';
import {validatePassword} from "../../services/helper.js";
const tokenName = process.env.REACT_APP_JWT_NAME;

export const Validation = (props) =>{
  const {firstDigit,secondDigit,thirdDigit,fourthDigit,setThirdDigit,setFourthDigit,setSecondDigit,setFirstDigit,otpError,setOtpError,email,signUpVerification} = props;
  const [optMessage,setOptMessage] = useState("Send OTP");  
  function check(e,digit){
    if(Number.isInteger(Number(e.value)) && digit === "1"){
      setFirstDigit(e.value);
    }
    if(Number.isInteger(Number(e.value)) && digit === "2"){
      setSecondDigit(e.value);
    }
    if(Number.isInteger(Number(e.value)) && digit === "3"){
      setThirdDigit(e.value);
    }
    if(Number.isInteger(Number(e.value)) && digit === "4"){
      setFourthDigit(e.value);
    }
  }

  // function startTimer(){
  //   // document.querySelector('button').disabled = true;
  //   let remainingSeconds = 5 * 60;
  //   // Update the timer every second
  //   const timerInterval = setInterval(() => {

  //     if (remainingSeconds <= 0 || otpError === false) {
  //       // Stop the timer when the specified duration is reached
  //       clearInterval(timerInterval);
  //       // document.querySelector('button').disabled = false; 
  //     } else {
  //       // Calculate minutes and seconds
  //       const minutes = Math.floor(remainingSeconds / 60);
  //       const seconds = remainingSeconds % 60;

  //       // Display the timer
  //       document.getElementById('timer').innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  //       // Decrease the remaining time
  //       remainingSeconds--;
  //     }
  //   }, 1000); 
  // }

  const sendOTP = async () =>{
      try{
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/otp/send-otp`,{email:email})
        setOptMessage("Resend");
        setOtpError(null);
      }catch(err){
        if(err.response.data.error){
          setOtpError(err.response.data.message);
        }
      }
  }

  return (
    <>
      <div className="text-white min-w-[350px] flex flex-col justify-center items-center gap-y-4 p-8  bg-slate-800 border-slate-400 rounded-tr-xl shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative sm:rounded-r-xl sm:rounded-t-xl ">
        <div> 
          <h1 className="text-4xl text-white font-bold text-center ">
            Validation
          </h1>
        </div>
        <div className="w-full flex flex-col gap-y-4">
            <div className="w-[50%] mx-auto"> 
              <img src={otpSvg}></img>
            </div>

            <div className="flex flex-col gap-y-3 text-center">
              <h1 className="">OTP for validation</h1>
              <p>Enter the 6-digit code send</p>
              <div className="grid grid-cols-4 px-8 gap-4">
                  <input type="text" className="each-digit-opt" value={firstDigit} maxLength={1} step={1} onChange={(e)=>{check(e.target,"1")}} required></input>
                  <input type="text" className="each-digit-opt" value={secondDigit} maxLength={1} step={1} onChange={(e)=>{check(e.target,"2")}} required></input>
                  <input type="text" className="each-digit-opt" value={thirdDigit} maxLength={1} step={1} onChange={(e)=>{check(e.target,"3")}} required></input>
                  <input type="text" className="each-digit-opt" value={fourthDigit} maxLength={1} step={1} onChange={(e)=>{check(e.target,"4")}} required></input>
              </div>
              <div className="flex justify-between items-center ">
                <p className="">OTP valid time 5 minutes !</p>
                <button className="rounded-xl bg-purple-500 px-1 py-2 " onClick={()=>{
                  sendOTP()
                }}>{optMessage}</button>
              </div>
            </div>
           
        </div>

        <button
          className="w-[70%] font-bold mb-4 text-[18px] mt-4 rounded-full bg-white text-violet-800 hover:bg-violet-600 hover:text-white py-2 transition colors duration-300"
          type="submit" onClick={()=>signUpVerification()}
        >
          Verify  
        </button>

      </div>
    </>
  )
}


export const SignupForm = (props) => {
  const { setIsLogin } = { ...props };

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [otp,setOtp] = useState("");
  const [showOpt,setShowOtp] = useState(false);




  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        username: username,
        password: password,
        email: email,
        otp:otp,
      };
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/user/register/`,
        userData,
      );

      if (getCookie(tokenName)) {
        deleteCookie(tokenName);
      }
      setCookie(tokenName, response.data.message.accessToken, 168);
      let newPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("validation page");
        }, 3000);
      });
      newPromise.then((res) => {
        navigate("/validUsername");
      });
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setErrorMessage(error.response.data.message);
      } else {
        console.error("Error:", error.message);
      }
    }
  };

  const toLogin = () => {
    setIsLogin(true);
    navigate("/login");
  };
  return (
    <>
      <form
        className="text-white flex flex-col justify-center items-center gap-y-4 p-14 py-10 bg-slate-800 border-slate-400 rounded-tr-xl shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative sm:rounded-r-xl sm:rounded-t-xl w-full"
      >
        <h1 className="text-4xl text-white font-bold text-center mb-6">
          Register
        </h1>
        <div className="relative ">
          <input
            type="text"
            name="firstName"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="block w-72 py-1 px-0 text-sm text-white bg-transparent border-0 border-b-2 borer-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 peer "
            placeholder=""
          />
          <label
            htmlFor=""
            className="text-gray absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer=focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus-translate-y-6 "
          >
            Username
          </label>
          <BiUser className="absolute top-1 right-4" />
        </div>
        <br />

        <div className="relative ">     
          <input
            type="email"
            name="lastName"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="block w-72 py-1 px-0 text-sm text-white bg-transparent border-0 border-b-2 borer-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 peer "
            placeholder=""
          />
          <label
            htmlFor=""
            className="text-gray absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer=focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus-translate-y-6 "
          >
            Email
          </label>
          <AiOutlineMail className="absolute top-1 right-4" />
        </div>
        
        <br/>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="block w-72 py-1 px-0 text-sm text-white bg-transparent border-0 border-b-2 borer-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 peer "
            placeholder=""
          />
          <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer=focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus-translate-y-6 ">
            Password
          </label>
          <button
            className="absolute top-1 right-4 cursor-pointer"
            onClick={handleTogglePassword}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>

          <br />
        </div>
        <p>
          Already have an account ?{" "}
          <button className="text-blue-500" onClick={() => toLogin()}>
            Login
          </button>
        </p>
        <label>{errorMessage}</label>
        <button
          className="w-[70%] font-bold mb-4 text-[18px] mt-4 rounded-full bg-white text-violet-800 hover:bg-violet-600 hover:text-white py-2 transition colors duration-300"
          type="submit"
        >
          Continue  
        </button>
      </form>
    </>
  );
};

const UserInfo = (props) =>{
  const {username,setUsername,password,setPassword,showPassword,setIsLogin,setShowPassword,setSteps,usernameError,setUsernameError,passwordError,setPasswordError} = props;
  

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  const toLogin = () => {
    setIsLogin(true);
    navigate("/login");
  };

  useEffect(()=>{
    if(usernameError === false && passwordError === false){
        setSteps(2);
    }
  },[usernameError,passwordError])

  const checkInputs = async () =>{
      try{
        const response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/user/existUsername/`,
          {username:username},
        ); 
        setUsernameError(false);
      } catch(error){

          setUsernameError(error.response.data.message);
      }

      const passwordValidMessage = validatePassword(password);
      if (passwordValidMessage.length === 0) {
        setPasswordError(false);
      } else {
        setPasswordError(passwordValidMessage[0]);
      }
  } 

  return(
    <>
         <div
            className="text-white flex flex-col justify-center items-center gap-y-4 p-14 py-10 bg-slate-800 border-slate-400 rounded-tr-xl shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative sm:rounded-r-xl sm:rounded-t-xl w-full"
          >
            <h1 className="text-4xl text-white font-bold text-center mb-6">
              Register
            </h1>
            <div className="relative ">
              <input
                type="text"
                name="firstName"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className={`block w-72 py-1 px-0 text-sm text-white bg-transparent border-0 border-b-2 ${usernameError === null ? "border-gray-300" : (usernameError === false) ? "border-green-500" : "border-red-600"} appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 peer `}
                placeholder=""
              />
              <label
                htmlFor=""
                className="text-gray absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer=focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus-translate-y-6 "
              >
                Username
              </label>
              <BiUser className="absolute top-1 right-4" />
            </div>
            <div className="text-left block w-full">
              <p className="text-sm">{usernameError}</p>
            </div>
            <br />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={`block w-72 py-1 px-0 text-sm text-white bg-transparent border-0 border-b-2 ${passwordError === null ? "border-gray-300" : (passwordError === false) ? "border-green-500" : "border-red-600"}  appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 peer`}
                placeholder=""
              />
              <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer=focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus-translate-y-6 ">
                Password
              </label>
              <div
                className="absolute top-1 right-4 cursor-pointer"
                onClick={handleTogglePassword}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>

              {/* <br /> */}
            </div>
            <div className="text-left block w-full">
              <p className="text-sm">{passwordError}</p>
            </div>
            <br/>
            <p>
              Already have an account ?{" "}
              <button className="text-blue-500" onClick={() => toLogin()}>
                Login
              </button>
            </p>
            <button
              className="w-[70%] font-bold mb-4 text-[18px] mt-4 rounded-full bg-white text-violet-800 hover:bg-violet-600 hover:text-white py-2 transition colors duration-300"
              type="submit" onClick={()=>checkInputs()}
            >
              Continue  
            </button>
      </div>
    </>
  )
}

const SuccessSignUp = () =>{
  return(
    <>
        <div
        className="text-white flex flex-col w-[17rem] items-center gap-y-4 p-14 py-10 bg-slate-800 border-slate-400 rounded-tr-xl shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative sm:rounded-r-xl sm:rounded-t-xl "
        >
              <h1 className="block w-full text-2xl font-bold">Successfully Registered</h1>
        </div>
    </>
  )
}


const EmailInfo = (props) =>{
  const {email,setEmail,setSteps,emailErrorMessage,setEmailErrorMessage} = props;
  useEffect(()=>{
    if(emailErrorMessage === false){

        setSteps(3);
    }
  },[emailErrorMessage])
  const checkInputs = async () =>{
      try{
        const response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/user/existEmail/`,
          {email:email},
        ); 
        setEmailErrorMessage(false);
      } catch(error){
          setEmailErrorMessage(error.response.data.message);
      }
  } 
  return(
    <>
         <div
        className="text-white flex flex-col justify-center items-center gap-y-4 p-14 py-10 bg-slate-800 border-slate-400 rounded-tr-xl shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative sm:rounded-r-xl sm:rounded-t-xl w-full"
        >
            <h1 className="text-4xl text-white font-bold text-center mb-6">
              Enter Your Email
            </h1>
            <div className="relative ">     
              <input
                type="email"
                name="lastName"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={` block w-72 py-1 px-0 text-sm text-white ${emailErrorMessage === null ? "border-gray-300" : (emailErrorMessage === false) ? "border-green-500" : "border-red-600"} bg-transparent border-0 border-b-2  appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 peer `}
                placeholder=""
              />
              <label
                htmlFor=""
                className="text-gray absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer=focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus-translate-y-6 "
              >
                Email
              </label>
              <AiOutlineMail className="absolute top-1 right-4" />
            </div>
           
            <label className="text-sm">{emailErrorMessage}</label>
            <br />
            <button
              className="w-[70%] font-bold mb-4 text-[18px] mt-4 rounded-full bg-white text-violet-800 hover:bg-violet-600 hover:text-white py-2 transition colors duration-300"
              type="submit" onClick={()=>checkInputs()}
            >
              Continue  
            </button>
      </div>
    </>
  )
}

export const Testing = (props) =>{
  const { setIsLogin } = { ...props };
  // const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstDigit,setFirstDigit] = useState(null);
  const [secondDigit,setSecondDigit] = useState(null);
  const [thirdDigit,setThirdDigit] = useState(null);
  const [fourthDigit,setFourthDigit] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [steps , setSteps ] = useState(1);
  const [usernameError, setUsernameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [otpError, setOtpError] = useState(null);

  const [emailErrorMessage,setEmailErrorMessage] = useState(null);

  useEffect(()=>{
      if(usernameError === false && passwordError === false && emailErrorMessage === false && otpError === false){
        setSteps(4);
      }
      else if(usernameError === false && passwordError === false && emailErrorMessage === false){
        setSteps(3);
      }
      else if(usernameError === false && passwordError === false){
        setSteps(2);
      }else{
        setSteps(1);
      }
  },[usernameError,passwordError,emailErrorMessage,otpError])


  async function signUpVerification(){
    try {
      const otp = firstDigit + secondDigit + thirdDigit + fourthDigit ;
      const userData = {
        username: username,
        password: password,
        email: email,
        otp:otp,
      };
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/user/register/`,
        userData,
      );
        setOtpError(false);

        var successMessage = new Promise((resolve,reject)=>{
          setTimeout(()=>{
              resolve();
          },2000);
        })
        successMessage.then((resolve)=>{
          setSteps(4);
        })
    }
    catch(err){
      setOtpError(err.response.data.message);
    }
  }



  return(
    <>
      <div className="relative">
      <button className="absolute top-4 right-6 text-white z-10" onClick={()=>{
          // changePage();
      }}>
        <span className="material-icons-sharp text-[1rem] hover:bg-white hover:text-black  items-center p-1 rounded-full">
          arrow_back_ios
        </span> 
      </button>
      {
        steps === 1 ?
        <UserInfo username={username} setUsername={setUsername}
                password={password} setPassword={setPassword} showPassword={showPassword} setShowPassword={setShowPassword} 
                setIsLogin={setIsLogin} setSteps={setSteps}
                usernameError ={usernameError} setUsernameError={setUsernameError}
                passwordError ={passwordError} setPasswordError={setPasswordError}
                />
        : (steps === 2) ?
        <EmailInfo email={email} setEmail={setEmail} setSteps={setSteps}
                        emailErrorMessage={emailErrorMessage} setEmailErrorMessage={setEmailErrorMessage}
        />
        : (steps === 3) ?
        <Validation firstDigit={firstDigit} setFirstDigit={setFirstDigit}
                    secondDigit={secondDigit} setSecondDigit={setSecondDigit}
                    thirdDigit={thirdDigit} setThirdDigit={setThirdDigit}
                    fourthDigit={fourthDigit} setFourthDigit={setFourthDigit} email={email}
                    signUpVerification = {signUpVerification} otpError={otpError} setOtpError={setOtpError}
        /> : (steps === 4) ? <SuccessSignUp/> :
        <></>
      }
      </div>
      
      
      {/* <EmailInfo email={email} setEmail={setEmail} errorMessage={errorMessage}/> */}
    </>
  )
}