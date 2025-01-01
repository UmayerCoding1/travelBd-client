import React, { useContext, useEffect, useRef, useState } from "react";
import { bdMap } from "../../../../provider/ImageProvider";
import { LocationIcon, SearchIcon } from "../../../../provider/IconProvider";
import video1 from './../../../../assets/image/banner/videofile.mp4'
import video2 from './../../../../assets/image/banner/videofile2.mp4'
import video3 from './../../../../assets/image/banner/videofile3.mp4'
import { SkeletonContext } from "../../../../utils/loading";
import HeroSkeleton from "../../../../skeletons/hero-skeleton/HeroSkeleton";
import { Checkbox, FormControlLabel } from "@mui/material";
import { useNavigate } from "react-router";





const Banner = () => {
  const [searchOption,setSearchOption]= useState('tour')
  const [address, setAddress] = useState('');
  const {skeletonLoading} = useContext(SkeletonContext)
  const {city} = address || {};
  const videoRef = useRef(null);
  const navigate =  useNavigate();

    useEffect(() => {
        const speed = () => {
            if(videoRef.current){
                videoRef.current.playbackRate = 2;
            }
        }

     const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        console.log(lat,lon);
        
        fetchAddress(lat, lon);
      },
      (err) => {
        console.log(`Error: ${err.message}`);
      }
    );

    speed();
    return () => navigator.geolocation.clearWatch(watchId);
    },[searchOption])

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
       
       <div className="lg:flex my-10 mb-20    ">
      <div className="lg:w-1/2 ">
        <div className="flex items-center  gap-2">
          <h2 className="font-AlexBrush bg-[#f0721d] rounded-xl text-white text-2xl inline-block p-1">
            Know Before You GO
          </h2>
          <img className="w-8" src={bdMap} alt="" />
        </div>

        <div>
          <h2 className="text-2xl lg:text-3xl font-[500] mt-3 leading-snug">
            Explore the Beauty of Bangladesh with{" "}
            <span className="text-[#0B7019] font-semibold">TRAVEL</span>
            <span className="text-red-500 font-s font-semibold">BD</span>
            <span className="text-xs font-semibold">.com</span>{" "}
          </h2>

          <p className="text-[#615C5C] text-xs leading-snug">
            "Explore Bangladesh’s stunning landscapes, rich culture, and hidden
            treasures. From serene beaches to lush greenery, TRAVELBD.com offers
            curated experiences for unforgettable journeys. Plan your perfect
            adventure today!"
          </p>
        </div>



     <div className="flex items-center gap-3 mt-8 mb-2" >
      <div className="flex items-center">
      <FormControlLabel  control={<Checkbox checked={searchOption === 'tour'} onChange={(e) => setSearchOption(e.target.value) } value={'tour'} />} label="Tour"/>
      </div>

      <div className="flex items-center">
      <FormControlLabel  control={<Checkbox checked={searchOption === 'hotel'} onChange={(e) => setSearchOption(e.target.value) } value={'hotel'} />} label="Hotel" />
      </div>
     </div>

{searchOption === 'hotel' && 
<div className="flex items-start  ">
          <div className="border border-gray-300 outline-none   w-36 h-[65px] rounded-l-xl flex p- gap-2 cursor-pointer">
            <div className="flex items-center">
              <button className="text-[#F0721D]">
                <LocationIcon />
              </button>
            </div>

            <div className="flex items-center flex-col justify-center ">
              <p className="text-xs text-gray-500">Location/From</p>
              <h3 className="text-[15px] font-bold">{city ? city : 'Your location'}</h3>
            </div>
          </div>

          <div className="border border-gray-300 outline-none w-36 h-[65px]  flex p-1 gap-2 cursor-pointer">
            <div className="flex items-center">
              <button className="text-[#F0721D]">
                <LocationIcon />
              </button>
            </div>

            <div className="flex items-center flex-col justify-center">
              <p className="text-xs text-gray-500">Location/TO</p>
              <h3 className=" font-bold">Select to tour</h3>
            </div>
          </div>

          <div className="border border-gray-300 outline-none  h-[65px]  flex p-1 gap-2 cursor-pointer">
            <div className="flex items-center">
              <button className="text-[#F0721D]">
                <LocationIcon />
              </button>
            </div>

            <div className="flex items-center flex-col justify-center">
              <p className="text-xs text-gray-500">Rooms & Guests</p>
              <h3 className="text-[15px] ">
                <span className="font-bold">1 </span>Room,{" "}
                <span className="font-bold">3 </span>Guest
              </h3>

              <p className="text-[12px] text-gray-500 ">
                <span className="font-bold">2</span> Adults,{" "}
                <span className="font-bold">1</span> Child
              </p>
            </div>
          </div>



          <div className="border w-24 h-[65px] bg-[#F0721D] rounded-r-xl flex items-center justify-center  group cursor-pointer">
            <p className="text-xs text-white transition-all ease-linear duration-300 group-hover:opacity-0">
              Search..
            </p>
            <button className="text-3xl text-white absolute transition-all ease-linear duration-300 opacity-0 group-hover:opacity-100">
              <SearchIcon />
            </button>
          </div>
        </div>
}
        
        {searchOption === 'tour' && 
        <div className="flex items-start  p-4 pt-0 pl-0">
                    <div className="border border-gray-300 outline-none w-full h-[65px] rounded-l-xl flex p-1 gap-2 cursor-pointer">
            <div className="flex items-center">
              <button className="text-[#F0721D]">
                <LocationIcon />
              </button>
            </div>

            <div className="flex items-center flex-col justify-center">
              <p className="text-xs text-gray-500">Location/From</p>
              <h3 className="text-lg font-bold">{city ? city : 'Your location'}</h3>
            </div>
          </div>

          <div className="border w-24 h-[65px] bg-[#F0721D] rounded-r-xl flex items-center justify-center  group cursor-pointer">
            <p className="text-xs text-white transition-all ease-linear duration-300 group-hover:opacity-0">
              Search..
            </p>
            <button className="text-3xl text-white absolute transition-all ease-linear duration-300 opacity-0 group-hover:opacity-100">
              <SearchIcon />
            </button>
          </div>
        </div>
        }

        
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
