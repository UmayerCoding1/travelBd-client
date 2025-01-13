import React, { useContext, useEffect, useRef, useState } from "react";
import { bdMap } from "../../../../provider/ImageProvider";
import { LocationIcon, SearchIcon } from "../../../../provider/IconProvider";
import video1 from './../../../../assets/image/banner/videofile.mp4'
import video2 from './../../../../assets/image/banner/videofile2.mp4'
import video3 from './../../../../assets/image/banner/videofile3.mp4'
import { SkeletonContext } from "../../../../utils/loading";
import HeroSkeleton from "../../../../skeletons/hero-skeleton/HeroSkeleton";
import { Checkbox, FormControlLabel } from "@mui/material";
import { Link, useNavigate } from "react-router";





const Banner = () => {
  
  
  const {skeletonLoading} = useContext(SkeletonContext)
 
  const videoRef = useRef(null);
  
  useEffect(() => {
    const speed = () => {
      if(videoRef.current){
          videoRef.current.playbackRate = 2;
      }
  }

  speed();
  },[])

  

    const fetchAddress = async (lat, lon) => {
      try {
        await fetch(
          `${import.meta.env.VITE_LOCATION_API}?format=json&lat=${lat}&lon=${lon}`
        )

        .then(res => res.json())
        .then(data => {
          setAddress(data.address);
          
        })
      } catch (err) {
        console.log('Failed to fetch location name.');
      }
    };
 
 

  return (
    <div>
      {skeletonLoading ? <HeroSkeleton/> :
       
       <div className="lg:flex items-center my-10 lg:my-0 lg:h-screen ">
      <div className="lg:w-1/2 ">
        <div className="flex items-center  gap-2">
          <h2 className="font-AlexBrush bg-[#f0721d] rounded-xl text-white text-2xl inline-block p-1">
            Know Before You GO
          </h2>
          <img className="w-8" src={bdMap} alt="" />
        </div>

        <div className="">
          <h2 className="text-2xl lg:text-3xl my-5 font-[500] mt-3 leading-snug">
            Explore the Beauty of Bangladesh with{" "}
            <span className="text-[#0B7019] font-semibold">TRAVEL</span>
            <span className="text-red-500 font-s font-semibold">BD</span>
            <span className="text-xs font-semibold">.com</span>{" "}
          </h2>

          <p className="text-[#605d5d] text-xs leading-7">
            "Explore Bangladesh’s stunning landscapes, rich culture, and hidden
            treasures. From serene beaches to lush greenery, TRAVELBD.com offers
            curated experiences for unforgettable journeys. Plan your perfect
            adventure today!"
          </p>

          <div className=" flex gap-3">
          <Link to={'/destinations'}>
            <button className="px-2 h-8 rounded-xl bg-[#F0721D] hover:text-black hover:bg-white text-white  hover:border border-black text-xs mt-5 transition-all ease-in duration-200">Explore More</button>
          </Link>
          {/* <Link to={'/travel-blog'}>
            <button className="w-20 h-8 rounded-lg border-black border bg-[#1F2937] text-white hover:bg-[#72a5ed] hover:border-none text-xs mt-5 transition-all ease-in duration-200">Learn More</button>
          </Link> */}
          </div>
          
        </div>
 
      </div>

      <div className="w-1/2 hidden lg:flex gap-5 relative">
        
       <div>
       <video
          src={video1}
          muted
          autoPlay
          loop
          className="w-48   rounded-xl "
          ref={videoRef}
        ></video>
       </div>

        <div>
        <video
          src={video2}
          muted
          autoPlay
          loop
          className="w-48 mt-5  rounded-xl "
          ref={videoRef}
        ></video>
        </div>

        <div>
        <video
          src={video3}
          muted
          autoPlay
          loop
          className="w-48 mt-10  rounded-xl "
          ref={videoRef}
        ></video>
        </div>
        
        
      </div>
    </div>
      }
    </div>
  );
};

export default Banner;
