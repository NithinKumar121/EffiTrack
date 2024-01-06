import React, { useState } from 'react'
import Profile from './Profile'
import Theme from './Theme';

const Navbar = () => {

  return (
    <div className='border-b-2 border-gray-400 white flex justify-between items-center h-[4rem] top-navbar z-10'>
        <div className='p-2 px-6 text-2xl font-bold text-title'>
            Dashboard
        </div>
        <div className='flex justify-center items-center gap-5 md:flex-row flex-col-reverse sm:px-6'>
            <Theme/>
            <Profile/>
        </div>
    </div>
  )
}

export default Navbar