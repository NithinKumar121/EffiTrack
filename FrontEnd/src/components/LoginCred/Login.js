import './logincred.css';
import login_bg from '../../assets/login_bg.jpg'
import { useState } from 'react';
import { LoginForm, SignupForm } from './Login.helper';

const Login = () =>{

  const [isLogin, setIsLogin] = useState(true)
   
    return(
        <>
          <div className={`h-[100vh] flex justify-center items-center bg-cover}style={{ backgroundImage: url(${login_bg}) }`} >
            <div className="flex flex-row w-full max-w-[600px] justify-center">
              <div className="text-white hidden sm:block bg-black p-14 rounded-tl-xl sm:rounded-l-xl sm:rounded-t-xl">
                <h1 className="text-4xl font-bold">effitrack</h1>
              </div>
              {
                (isLogin === true)?
                <LoginForm/>:<SignupForm/>
              }
            </div>
          </div>
        </>
    )
}

export default Login;