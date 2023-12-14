import React from "react";
import Loader from '../../assets/loader.mp4'
const Shim = () =>{
    return (
        <>
        <div className="w-full h-screen relative">
            <video autoPlay loop muted className="w-full h-full object-cover">
                {/* Add your video source(s) here */}
                <source src={Loader} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
      
        </>
    )
}

export default Shim;
