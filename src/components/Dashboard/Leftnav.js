import React  from 'react'
import temp_logo from '../../assets/temp_logo.jpeg';
import { Link } from 'react-router-dom';
import LCimage from '../../assets/LeetCode_logo.png'
import CCimage from '../../assets/codechef.jpeg';
import CFimage from '../../assets/codeforces-3.png'
import GithubImg from '../../assets/github_left_bar.png'
import cc_logo from '../../assets/cc-logo.svg'

const Leftnav = () => {
  return <aside className='text-black shadow-md'>
    <div className='top'>
      {/* logo  */}
      <div className='logo'>      
        <img src={temp_logo} alt='image' className='w-[40px] h-[40px]'></img>
        <h1 className='text-2xl font-semibold'> <span>EFFI</span>TRACK</h1>
      </div>
      <div className='close'>
        <span class="material-icons-sharp">close</span>
      </div>
    </div>
    <div className='mid '>
        <div className='mid_in'>
          <a href="#" className='active'> 
          <span class="material-icons-sharp">dashboard</span>
           <h4>DashBoard</h4> 
          </a>
          <a href="#" className=''> 
          <span><img class="h-[30px] w-[30px]" src={LCimage} ></img> </span>
          <h4>LeetCode</h4> 
          </a>
          <a href="#" className=''>
          <span><img class="h-[30px] w-[30px]" src={CFimage} ></img> </span> 
          <h4>CodeForces</h4>
          </a>
          <a href="#" className=''> 
          <span><img class="h-[30px] w-[30px]" src={CCimage} ></img></span>
          <h4> CodeChef</h4>
          </a>
          <a href="#" className=''> 
          <span><img class="h-[30px] w-[30px]" src={GithubImg} ></img> </span>
          <h4>Github </h4>
          </a>
          <div className='aside-bottom'>
            <div className='settings'>
              <a href="#" className=''> 
                <span class="material-icons-sharp">settings</span> 
                <h4>Settings </h4>
              </a>
              <a href="#" className=''> 
                <span class="material-icons-sharp">message</span> 
                <h4>Support </h4>
              </a>
            </div>
            <div className='sign-out'>
              <a href="#" className=''> 
                <span class="material-icons-sharp">dashboard</span> 
                <h4>Github </h4>
              </a>
            </div>
          </div>
        </div>
    </div>
    <div className='bottom'>
      
    </div>
  </aside>
}

export default Leftnav;