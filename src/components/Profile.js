import React, { useState } from 'react'
import temp_logo from '../assets/temp_logo.jpeg'

const Profile = () => {

  const[userName, setUserName] = useState("Cibiyanna");
  const[role, setRole] = useState("Founder");

  return (
    <div className='flex gap-3'>
      <div>
        <img src={temp_logo} className='w-[3rem] rounded-[100%]'></img>
      </div>
      <div>
        <div className='text-primary font-medium'>{userName}</div>
        <div className='text-accent'><small>{role}</small></div>
      </div>
    </div>
  )
}

export default Profile