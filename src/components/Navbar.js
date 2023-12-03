import React, { useState } from 'react'
import Profile from './Profile'
import Theme from './Theme';

const Navbar = () => {

  return (
    <div className='flex justify-between items-center h-[4rem]'>
        <div className='p-2 text-2xl font-bold text-title'>
            Dashboard
        </div>
        <div className='flex justify-center items-center gap-5'>
            <Theme/>
            <Profile/>
        </div>
    </div>
  )
}

export default Navbar