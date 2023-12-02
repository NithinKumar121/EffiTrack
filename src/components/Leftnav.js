import React from 'react'

const Leftnav = () => {
  return <aside className='h-[100vh] bg-white'>
    <div className='top'>
      {/* logo  */}
      <div className='logo'>      
        <img src=''alt='image'></img>
        <h1 className='text-3xl font-bold'>EffiTrack</h1>
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