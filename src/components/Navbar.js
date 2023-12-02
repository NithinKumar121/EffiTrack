import React, { useState } from 'react'
import Profile from './Profile'
import Theme from './Theme';

const Navbar = () => {

    const[theme, setTheme] = useState("");

  return (
    <div className='flex justify-between items-center'>
        <div className='p-2 text-2xl font-bold text-title'>
            Dashboard
        </div>
        <div>
            <Theme/>
            <Profile/>
        </div>
    </div>
  )
}

export default Navbar