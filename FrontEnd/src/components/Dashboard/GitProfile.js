import React from 'react'
import temp_logo from '../../assets/temp_logo.jpeg'

const GitProfile = ({modify}) => {
  return (
    <div className='flex flex-col px-4 gap-2 relative mt-3'>
        <div className="github-card "> <h1 className={`${modify.topic}`}>GitHub</h1></div>
        <div className='flex gap-4 items-center'>
            <div className='w-[25%] py-2'>
                <img src={temp_logo} className='rounded-[100%] shadow-lg'></img>
            </div>
            <div>
                <div className='text-xl font-medium'>username</div>
                <small>followers : 100</small><br/>
                <small>following : 0</small>
            </div>
        </div>
        <div>
            Total contributions : 99+
        </div>
    </div>
  )
}

export default GitProfile