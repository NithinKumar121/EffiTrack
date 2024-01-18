import './logincred.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {BiUser} from "react-icons/bi";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {AiOutlineUnlock,AiOutlineMail} from "react-icons/ai";
import { setCookie , getCookie, deleteCookie } from '../../services/servicehelp.js';

const base_url = process.env.REACT_APP_BASE_URL;
const tokenName = process.env.REACT_APP_JWT_NAME;

export const LoginForm = ( props ) => {
    const navigate = useNavigate();
    const {setIsLogin} = {...props};
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [errorMessage,setErrorMessage]  = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
      setShowPassword(!showPassword);
    };
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const userData = {
                username:username,
                password:password
            }
            const response = await axios.post(`${base_url}/user/login/`,userData);  
            const data = response.data;
            if(getCookie(tokenName)){
                deleteCookie(tokenName);
            }
            setCookie(tokenName,data.accessToken,4);
            navigate('/');
        }
        catch(error){
            if (error.response && (error.response.status === 404 || error.response.status === 401)) {
                setErrorMessage(error.response.data.message)
            } else {
                console.error('Error:', error.message);
            }
        }
    }

    const toSignup = () => {
        setIsLogin(false)
    }

    return(
        <>
            <form onSubmit={handleSubmit} className='text-white flex flex-col justify-center items-center gap-y-4 p-14 bg-slate-800 border-slate-400 rounded-tr-xl shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative sm:rounded-r-xl sm:rounded-t-xl w-full'>
    <h1 className='text-4xl text-white font-bold text-center mb-6'>Login</h1>
       <div className='relative my-2'>
      <input
        type="text"
        id="name"
        name="firstName"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className='block w-72 py-1 px-0 text-sm text-white bg-transparent border-0 border-b-2 borer-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 peer ' placeholder=""
      />
      <label htmlFor='' className='text-gray absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer=focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus-translate-y-6 '>Username</label>
      <BiUser className='absolute top-1 right-4'/>
     </div>
      <br />
      <div className='relative my-2'>
      <input
         type={showPassword ? 'text' : 'password'}
        id="pass"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className='block w-72 py-1 px-0 text-sm text-white bg-transparent border-0 border-b-2 borer-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 peer ' placeholder=""
      />
      <label className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer=focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus-translate-y-6 '>Password</label>
      <div className='absolute top-1 right-4 cursor-pointer' onClick={handleTogglePassword}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </div>
      </div>
      <br />
      <div className='flex items-center justify-between w-full'>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="mr-2 text-white"
            />
            <span className="text-sm text-white">Remember Me</span>
          </label>
          <a href="#" className="text-violet-500">Forgot Password</a>
        </div>

        <button className='w-[70%] font-bold mb-4 text-[18px] mt-4 rounded-full bg-white text-violet-800 hover:bg-violet-600 hover:text-white py-2 transition colors duration-300' type="submit">Login</button>

        <span className='mb-4'>New here? <button className='text-violet-500' onClick={() => toSignup()}>Create an account</button></span>
        <label>{errorMessage}</label>
    </form>
        </>
    )
}



export const SignupForm = (props) =>{

    const {setIsLogin} = {...props};

    const navigate = useNavigate();
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [errorMessage,setErrorMessage]  = useState('');
    const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const userData = {
                username:username,
                password:password,
                email:email
            }
            const response = await axios.post(`${base_url}/user/register/`, userData);
            let newPromise = new Promise((resolve, reject) =>{
                setTimeout(()=>{
                    resolve("To login Page");
                },3000);
            })
            newPromise.then((res)=>{
                navigate('/login')
            
            })
        }
        catch(error){
            if (error.response && error.response.status === 409) {
                setErrorMessage(error.response.data.message)
            } else {
                console.error('Error:', error.message);
            }
        }
    }
    
    const toLogin = () =>{
        setIsLogin(true)
    }
    return(
        <>
            <form onSubmit={handleSubmit} className='text-white flex flex-col justify-center items-center gap-y-4 p-14 py-10 bg-slate-800 border-slate-400 rounded-tr-xl shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative sm:rounded-r-xl sm:rounded-t-xl w-full'>
              <h1 className='text-4xl text-white font-bold text-center mb-6'>Register</h1>
              <div className='relative my-2'>
                    <input
                        type="text"
                        name="firstName"
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                        required
                        className='block w-72 py-1 px-0 text-sm text-white bg-transparent border-0 border-b-2 borer-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 peer ' placeholder=""
                    />
                      <label htmlFor='' className='text-gray absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer=focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus-translate-y-6 '>Username</label>
          <BiUser className='absolute top-1 right-4'/>
                     </div>
                <br/>
                <div className='relative my-2'>
                    <input
                        type="email"
                        name="lastName"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        required
                        className='block w-72 py-1 px-0 text-sm text-white bg-transparent border-0 border-b-2 borer-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 peer ' placeholder=""
      />
      <label htmlFor='' className='text-gray absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer=focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus-translate-y-6 '>Email</label>
      <AiOutlineMail className='absolute top-1 right-4'/>
                    </div>
                <br/>
                <div className='relative my-2'>
                    <input
                         type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        required
                        className='block w-72 py-1 px-0 text-sm text-white bg-transparent border-0 border-b-2 borer-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 peer ' placeholder=""
                    />
                  <label className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer=focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus-translate-y-6 '>Password</label>
                  <div className='absolute top-1 right-4 cursor-pointer' onClick={handleTogglePassword}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </div>

                <br/>
                </div>
                <p>Already have an account ? <button className='text-violet-500' onClick={()=>toLogin()}>Login</button></p>
                <label>{errorMessage}</label>
                <button className='w-[70%] font-bold mb-4 text-[18px] mt-4 rounded-full bg-white text-violet-800 hover:bg-violet-600 hover:text-white py-2 transition colors duration-300' type="submit">Sign Up</button>
            </form>
        </>
    )
}