import './logincred.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setCookie , getCookie, deleteCookie } from '../../services/service.help';
import login_bg from '../../assets/login_bg.jpg'

const base_url = process.env.REACT_APP_BASE_URL;
const tokenName = process.env.REACT_APP_JWT_NAME;

export const LoginForm = () => {
    const navigate = useNavigate();
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [errorMessage,setErrorMessage]  = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const userData = {
                username:username,
                password:password
            }
            const response = await axios.post(`${base_url}/user/login/,userData`);
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
        navigate('/signup');
    }

    return(
        <>
            <form onSubmit={handleSubmit} className='text-white flex flex-col justify-center items-center gap-y-4 p-14 bg-slate-800 border-slate-400 rounded-tr-xl shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative sm:rounded-r-xl sm:rounded-t-xl w-full'>
    <h1 className='text-4xl text-white font-bold text-center mb-6'>Login</h1>
       <div className='relative my-4'>
      <input
        type="text"
        id="name"
        name="firstName"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 peer-text-6xl'
      />
      <label htmlFor='' className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus-translate-y-6 '>Username</label>
     </div>
      <br />
      <div className='relative my-4'>
      <input
        type="password"
        id="pass"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 borer-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus:border-blue-600 peer '
      />
      <label className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer=focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus-translate-y-6 '>Password</label>
      </div>
      <br />
      <p>Don't have an account ? <button className='' onClick={() => toSignup()}>New here?</button></p>
      <label>{errorMessage}</label>
      <button type="submit">Login</button>
    </form>
        </>
    )
}



export const SignupForm = () =>{
    const navigate = useNavigate();
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [errorMessage,setErrorMessage]  = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const userData = {
                username:username,
                password:password,
                email:email
            }
            const response = await axios.post(`${base_url}/user/register/,userData`);
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
        navigate('/login');
    }
    return(
        <>
            <form onSubmit={handleSubmit} className='text-black flex flex-col gap-y-4 p-14 rounded-xl bg-blue-300'>
                <label>Username:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                        required
                        className='text-black'
                    />
                <br/>
                <label>Email:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        required
                        className='text-black'
                    />
                
                <br/>
                <label> Password: </label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        required
                        className='text-black'
                    />
               
                <br/>
                <p>Already have an account ? <button className='' onClick={()=>toLogin()}>Login</button></p>
                <label>{errorMessage}</label>
                <button type="submit">Sign Up</button>
            </form>
        </>
    )
}