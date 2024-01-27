import React, { useState } from "react";
import {
  GITHUB_USERNAME,
  LEETCODE_USERNAME,
  CODEFORCES_USERNAME,
  CODECHEF_USERNAME,
  ImageUpload,
  PROFILE_TOP,
  LEETCODE_EDIT,
  USERNAME_EDIT,
  CODEFORCES_EDIT,
  CODECHEF_EDIT,
  GITHUB_EDIT,
} from "./Platform.username";

const EditProfile = () => {
  return (
    <div className="flex flex-col lg:gap-y-12 md:gap-y-10 sm:gap-y-8  mb-4">
      <div>
        <PROFILE_TOP />
      </div>
      <div className="flex w-full justify-center items-center mt-4 dark:text-white text-center">
        <div className="lg:w-[65%] md:w-[70%] sm:w-[75%] w-[98%] p-5 shadow-2xl h-full rounded-xl">
          <USERNAME_EDIT />
          <LEETCODE_EDIT />
          <CODEFORCES_EDIT />
          <CODECHEF_EDIT />
          <GITHUB_EDIT />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
