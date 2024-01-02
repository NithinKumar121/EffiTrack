import './logincred.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () =>{
    const navigate = useNavigate();
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [errorMessage,setErrorMessage]  = useState('');

    const handleSubmit = async (e)=> {
        e.preventDefault();
        try{
            const response = await fetch('http://localhost:5000/api/user/register/',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({username:username,email:email,password:password})
            })
            const data =await response.json();
            if(data.error){
                setErrorMessage(data.message);
            }
            if(data.error==false){  
                navigate('/login')
            }
        }
        catch(err){
            console.log(err);
        }
    }

    const toLogin = () =>{
        navigate('/login');
    }

    return(
        <>
            <form  className='text-black flex flex-col gap-y-4 p-4 rounded-xl bg-gray-300' onSubmit={handleSubmit} method='POST'>
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

export default Signup;