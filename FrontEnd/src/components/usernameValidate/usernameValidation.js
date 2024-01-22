import './usernameValidation.css'
import login_bg from '../../assets/abstract-flowing-neon-wave-background.jpg'
import { useState , useEffect, useRef } from 'react'
import axios from 'axios'
import { getCookie } from '../../services/servicehelp';
import { useNavigate } from 'react-router-dom';

const Error = () =>{
    return(
        <>
             <div className="input_field errorbox">
                <h1>Invalid username</h1>
                <span className="material-icons-outlined text-[#d73332]">block</span>
            </div>
        </>
    )
}

const Warning = () =>{
    return(
        <>
            <div className="input_field warningbox">
                <h1>username already exist</h1>
                <span className="material-icons-outlined text-[rgba(255,159,10,255)]">warning</span>
            </div>
        </>
    )
}

const Validation = () =>{
    return(
        <>
            <div className="input_field validationbox">
                <h1>wait for validation</h1>
                <span className="material-icons-sharp text-[#0090fe]">info</span>
            </div>
        </>
    )
}

const Success = () =>{
    return(
        <>
            <div className="input_field successbox">
                <h1>success</h1>
                <span className="material-icons-outlined text-[#30d158]">task_alt</span>
            </div>
        </>
    )
}



const UserValid = ()=>{
    const navigate = useNavigate();
    const [lcUsername,setLcUsername] = useState('');
    const [cfUsername,setCfUsername] = useState('');
    const [ccUsername,setCcUsername] = useState('');
    const [githubUsername,setGithubUsername] = useState('');
    const [lcflag,setLcflag] = useState(0);
    const [ccflag,setCcflag] = useState(0);
    const [cfflag,setCfflag] = useState(0);
    const [githubFlag,setGithubFlag] = useState(0);
    const [verified,setVerified] = useState(0);
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const url = process.env.REACT_APP_BASE_URL;
        const authToken = getCookie('jwtToken');
        if(!authToken){
        //   navigate('/login');
        }
            
        try{    
            const axiosInstance = axios.create({
                headers: {
                common: {
                    Authorization: `Bearer ${authToken}`,
                    'Content-Type': 'application/json', 
                }
                }
            });
            setLcflag(3);
            const lcResponse = await axiosInstance.post(`${process.env.REACT_APP_BASE_URL}/leetcode/exist`,{username:lcUsername});
            setLcflag(1);
        } catch(e){
            setLcflag(2);
        }

        try{
            const axiosInstance =await axios.create({
                headers: {
                common: {
                    Authorization: `Bearer ${authToken}`,
                    'Content-Type': 'application/json', 
                }
                }
            });
            
            setCfflag(3);
            const cfResponse = await axiosInstance.post(`${process.env.REACT_APP_BASE_URL}/codeforces/exist`,{username:cfUsername});
            setCfflag(1);
        } catch(e){
            setCfflag(2);
        }
        try{
            const axiosInstance = axios.create({
                headers: {
                common: {
                    Authorization: `Bearer ${authToken}`,
                    'Content-Type': 'application/json', 
                }
                }
            });
            
            setCcflag(3);
            const ccResponse = await axiosInstance.post(`${process.env.REACT_APP_BASE_URL}/codechef/exist`,{username:ccUsername});
            setCcflag(1);
        } catch(e){
            setCcflag(2);
        }
        
        try{
            const axiosInstance = axios.create({
                headers: {
                common: {
                    Authorization: `Bearer ${authToken}`,
                    'Content-Type': 'application/json', 
                }
                }
            });
            setGithubFlag(3);
            const githubResponse = await axiosInstance.post(`${process.env.REACT_APP_BASE_URL}/github/exist`,{username:githubUsername});
            setGithubFlag(1);
        } catch(error){
            setGithubFlag(2);
        } 
    }
    useEffect(()=>{
        if(ccflag==1 && cfflag==1 && lcflag==1 && githubFlag==1){

            saveUsername()
            .then((res)=>{
                if(res){
                    const waitBro = new Promise((resolve, reject)=>{
                        setTimeout(() => {
                            resolve('Promise resolved after 2 seconds');
                          }, 2000);
                     })
                     waitBro.then((waiting_over)=>{
                        navigate('/');
                     })
                }
                else{
                    const waitBro = new Promise((resolve, reject)=>{
                        setVerified(2);
                        setTimeout(() => {
                            resolve();
                          }, 2000);
                     })
                     waitBro.then((waiting_over)=>{
                        setVerified(0);
                     })
                }  
            })
        }
    },[lcflag,ccflag,cfflag,githubFlag])

    const saveUsername = async ()=>{
        const authToken = getCookie('jwtToken');
        const body = {
            leetcode:lcUsername,
            codechef:ccUsername,
            codeforces:cfUsername,
            github:githubUsername,
        }
        const axiosInstance = axios.create({
            headers: {
            common: {
                Authorization: `Bearer ${authToken}`,
                'Content-Type': 'application/json', 
            }
            }
        });
        try{
            const savedUsername = await axiosInstance.post(`${process.env.REACT_APP_BASE_URL}/user/verifedUsername`,body);
            return true;
        }
        catch(err){
            return false;
        }
    }


    return(
        <>
            <section className="valid_section" style={{ backgroundImage: `url(${login_bg}) `}}>
                <div className="valid_box">
                    <div className="valid_top">
                        <h1 className="font-semibold text-3xl">Effitrack</h1>
                        <h4 className="font-semibold">Let's begin your effitrack journey from here !</h4>
                    </div>
                    <div className="validation_div">
                        <form onSubmit={handleSubmit}>
                            <div className="">
                                <label htmlFor='leetcode'>Leetcode *</label>
                                <input 
                                    type="text"
                                    placeholder='Leetcode username'
                                    className='input_field'
                                    id='leetcode'
                                    value={lcUsername}
                                    onChange={(e)=>setLcUsername(e.target.value)}
                                ></input>
                                {lcflag == 0 ? (
                                    <div></div>
                                ) : lcflag == 1 ? (
                                    <Success/>
                                ) : lcflag == 2 ? (
                                    <Error/>
                                ) : (
                                    <Validation/>  
                                )}
                               
                            </div>
                            <div>
                            
                                <label htmlFor='codechef'>Codechef *</label>
                                <input 
                                    type='text'
                                    placeholder='Codechef username'
                                    className='input_field'
                                    id='codechef'
                                    value={ccUsername}
                                    onChange={(e)=>setCcUsername(e.target.value)}
                                ></input>
                                {ccflag == 0 ? (
                                    <div></div>
                                ) : ccflag == 1 ? (
                                    <Success/>
                                ) : ccflag == 2 ? (
                                    <Error/>
                                ) : (
                                    <Validation/>  
                                )}
                            </div>
                            <div>
                            
                                <label htmlFor='codeforces'>Codeforces *</label>
                                <input 
                                    type='text'
                                    placeholder='Codeforces username'
                                    className='input_field'
                                    id='codeforces'
                                    value={cfUsername}
                                    onChange={(e)=>setCfUsername(e.target.value)}
                                ></input>
                                    {cfflag == 0 ? (
                                        <div></div>
                                    ) : cfflag == 1 ? (
                                        <Success/>
                                    ) : cfflag == 2 ? (
                                        <Error/>
                                    ) : (
                                        <Validation/>  
                                    )}
                            </div>
                            <div>
                            
                                <label htmlFor='github'>Github *</label>
                                <input 
                                    type='text'
                                    placeholder='Github username'
                                    className='input_field'
                                    id='github'
                                    value={githubUsername}
                                    onChange={(e)=>setGithubUsername(e.target.value)}
                                ></input> 
                                {githubFlag == 0 ? (
                                    <div></div>
                                ) : githubFlag == 1 ? (
                                    <Success/>
                                ) : githubFlag == 2 ? (
                                    <Error/>
                                ) : (
                                    <Validation/>  
                                )}
                            </div>
                            <div className="submit_div translate-y-[-1rem]">
                                {
                                    verified == 0 ?
                                    (<div>
                                        <button className="submit_but">Submit</button>
                                    </div> ) : verified == 1 ?
                                    (
                                    <div>
                                        <button className="bg-green-400 text-white inline-block p-3 rounded-xl">Verified</button>
                                    </div>)
                                    :(
                                        <div>
                                            <button className="bg-red-400 text-white inline-block p-3 rounded-xl">Internet Error</button>
                                        </div>
                                    )
                                }
                               
                            </div>
                        </form>
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default UserValid;