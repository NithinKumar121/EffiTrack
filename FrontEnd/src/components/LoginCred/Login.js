import './logincred.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () =>{
    const navigate = useNavigate();
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [errorMessage,setErrorMessage]  = useState('');
    const handleSubmit = async (e)=> {
        e.preventDefault();
        try{
           await fetch('/api/user/login',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({username:username,password:password})
            })
            .then((response)=>response.json())
            .then((data)=>{
                console.log(data.error)
                if(data.error){
                    setErrorMessage(data.message);
                }else{
                    navigate('/');
                }
            })
            
        }
        catch(err){
            console.log(err);
        }

    }

    return(
        <>
            <form onSubmit={handleSubmit} className='text-black flex flex-col gap-y-4 p-4 rounded-xl bg-gray-300'>
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
                {/* <label>Email:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        required
                        className='text-black'
                    />
                
                <br/> */}
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
                <label>{errorMessage}</label>
                <button type="submit">Sign Up</button>
            </form>
        </>
    )
}

export default Login;