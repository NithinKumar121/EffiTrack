import React from 'react'
import temp_logo from '../assets/temp_logo.jpeg';
const Leftnav = () => {
  return <aside className='h-[100vh] bg-white'>
    <div className='top'>
      {/* logo  */}
      <div className='logo'>      
        <img src={temp_logo} alt='image' className='w-[50px] h-[50px]'></img>
        <h1 className='text-3xl font-bold'> <span className='text-orange-600'>EFFI</span> TRACK</h1>
      </div>
        {/* close button on small screen */}
      <div className='close'>
        <span class="material-icons-sharp">close</span>
      </div>
        
    </div>
    <div className='mid'>

    </div>
    <div className='bottom'>
      
    </div>
  </aside>
}

export default Leftnav;