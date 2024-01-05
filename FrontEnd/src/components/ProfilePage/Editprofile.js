import React, { useState } from 'react';
import { GITHUB_USERNAME , LEETCODE_USERNAME , CODEFORCES_USERNAME , CODECHEF_USERNAME, ImageUpload } from './Platform.username';


const EditProfile = () => {
    return(
      <>
        <div className=''> 
            <ImageUpload/>
            <LEETCODE_USERNAME/>
            <CODEFORCES_USERNAME/>
            <CODECHEF_USERNAME/>
            <GITHUB_USERNAME/>  
        </div>
      </>
    )
};

export default EditProfile;
