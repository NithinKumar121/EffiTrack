import React, { useState } from 'react';
import { GITHUB_USERNAME , LEETCODE_USERNAME , CODEFORCES_USERNAME , CODECHEF_USERNAME, ImageUpload, PROFILE_TOP, LEETCODE_EDIT, USERNAME_EDIT, CODEFORCES_EDIT, CODECHEF_EDIT, GITHUB_EDIT } from './Platform.username';


const EditProfile = () => {
  
    return(
      <div className='flex flex-col gap-y-12'>
        <div>
          <PROFILE_TOP/>
        </div>
        <div className='flex w-full justify-center items-center pl-[5rem] dark:text-white text-center'> 
            <div className='w-full max-w-[60rem]  p-5 shadow-2xl h-full rounded-xl'>
              <USERNAME_EDIT/>
              <LEETCODE_EDIT/>
              <CODEFORCES_EDIT/>
              <CODECHEF_EDIT/>
              <GITHUB_EDIT/>
            </div> 
        </div>
      </div>
    )
};

export default EditProfile;
