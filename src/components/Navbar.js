import React from 'react'
import Profile from './Profile'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
        <div className='p-2 text-2xl font-bold'>
            EFFITRACK
        </div>
        <div>
            <div>l/d</div>
            <Profile/>
        </div>
    </div>
  )
}

export default Navbar