import React, { useState } from 'react';
import { GITHUB_USERNAME , LEETCODE_USERNAME , CODEFORCES_USERNAME , CODECHEF_USERNAME, ImageUpload, PROFILE_TOP, LEETCODE_EDIT, USERNAME_EDIT, CODEFORCES_EDIT, CODECHEF_EDIT, GITHUB_EDIT } from './Platform.username';


const EditProfile = () => {
    return(
      <>
        <PROFILE_TOP/>
        <div className='flex w-full justify-center items-center pl-[5rem]'> 
            <div className='w-full max-w-[60rem] mt-10 p-5 rounded-lg shadow-xl'>
              {/* <ImageUpload/> */}
              <USERNAME_EDIT/>
              <LEETCODE_EDIT/>
              <CODEFORCES_EDIT/>
              <CODECHEF_EDIT/>
              <GITHUB_EDIT/>
            </div> 
        </div>
      </>
    )
};

export default EditProfile;
