import './logincred.css';
import login_bg from '../../assets/abstract-flowing-neon-wave-background.jpg'
import login from '../../assets/login.png'
import signup from '../../assets/signup.png'
import EFFITRACK from '../../assets/EFFITRACK.png'
import { useState } from 'react';
import { LoginForm, SignupForm } from './Login.helper';

const Login = () =>{

  const [isLogin, setIsLogin] = useState(true)
   
    return(
        <>
          <div className={`h-[100vh] flex justify-center items-center bg-cover`}style={{ backgroundImage: `url(${login_bg}) `}} >
            <div className={`flex ${(isLogin===true)?'flex-row':'flex-row-reverse'} w-full max-w-[600px] justify-center`}>
              <div className="min-w-[350px] hidden items-center justify-center text-white md:flex  bg-slate-950 rounded-tl-xl sm:rounded-l-xl sm:rounded-t-xl">
                <img src={(isLogin===true)?login:signup} alt='login img' className='min-w-[420px] z-10 shadow-md floating-element'/>
              </div>  
              {
                (isLogin === true)?
                <LoginForm setIsLogin = {setIsLogin} />:<SignupForm setIsLogin = {setIsLogin} />
              }
            </div>
          </div>
        </>
    )
}

export default Login;