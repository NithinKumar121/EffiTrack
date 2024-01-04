import React, { useState } from 'react';
import { GITHUB_USERNAME , LEETCODE_USERNAME , CODEFORCES_USERNAME , CODECHEF_USERNAME } from './Platform.username';


const EditProfile = () => {
    return(
      <>
      <div className=''> 
          <LEETCODE_USERNAME/>
          <CODEFORCES_USERNAME/>
          <CODECHEF_USERNAME/>
          <GITHUB_USERNAME/>  
      </div>
        
      </>
    )
};

export default EditProfile;
