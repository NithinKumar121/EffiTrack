import React from 'react'
import temp_logo from '../../assets/temp_logo.jpeg'

const GitProfile = ({modify}) => {
  return (
    <div className='flex flex-col px-4 gap-2 relative h-full '>
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
        <div className='overflow-hidden h-[6rem] view-more'>
            <div className='text-xl'>Description</div>
            <h6 className='bottomS '>
            Hey this is murugaperumal, devloping <br></br>
            <span className='view-more-span'>
                view more
            </span>
            </h6>
            <span class="material-icons-sharp block text-center relative bottom-1 text-gray-700 cursor-pointer">keyboard_double_arrow_down</span>
        </div>
        <div className='absolute bottom-2 w-[90%] flex justify-center '>
                <button className='bg-purple-600 p-2 rounded-xl text-white hover:bg-purple-500'>View More</button>
        </div>
    </div>
  )
}

export default GitProfile