import { Checkbox, FormControlLabel } from '@mui/material';

import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { LocationIcon, SearchIcon } from '../../../../provider/IconProvider';

const SearchOption = () => {
  const [searchOption, setSearchOption] = useState('tour');
  const [address, setAddress] = useState('');
  const [showTourSearchBar, setShowTourSearchBar] = useState(false);
  const [searchLocation,setSearchLocation] = useState('');
  const [locations,setLocations] = useState([]);
  const { city } = address || {};
  const locationListRef = useRef(null);
  const navigate = useNavigate();

const filterLocation = locations.filter(location =>  location.title.toLowerCase().includes(searchLocation.toLowerCase()));


  const fetchAddress = async (lat, lon) => {
    try {
      await fetch(
        `${import.meta.env.VITE_LOCATION_API}?format=json&lat=${lat}&lon=${lon}`
      )
        .then(res => res.json())
        .then(data => {
         
          
          setAddress(data.address.city);

        })
    } catch (err) {
      console.log('Failed to fetch location name.');
    }
  };

 

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        console.log(lat, lon);

        fetchAddress(lat, lon);
      },
      (err) => {
        console.log(`Error: ${err.message}`);
      }
    );


    const handleOutSiteClick = (e) => {
      if (locationListRef.current && !locationListRef.current.contains(e.target)) {
        setShowTourSearchBar(false);
      }
    }

    document.addEventListener('click', handleOutSiteClick);

   fetch('location.json')
   .then(res => res.json())
   .then(data => setLocations(data))

    return () => {
      navigator.geolocation.clearWatch(watchId);
      document.removeEventListener('click', handleOutSiteClick)
    }
  }, [searchOption])



  return (
    <div className="flex flex-col items-center justify-center w-full lg:h-[70vh] bg-searchBanner bg-center bg-cover rounded-2xl lg:py-20 lg:px-8 mb-10">

      <div className='w-full bg-white flex flex-col items-center justify-center rounded-lg p-3'>
        <div className="flex items-center gap-3 mt-8 mb-2" >
          <div className="flex items-center">
            <FormControlLabel control={<Checkbox checked={searchOption === 'tour'} onChange={(e) => setSearchOption(e.target.value)} value={'tour'} />} label="Tour" />
          </div>

          <div className="flex items-center">
            <FormControlLabel control={<Checkbox checked={searchOption === 'hotel'} onChange={(e) => setSearchOption(e.target.value)} value={'hotel'} />} label="Hotel" />
          </div>
        </div>

        {searchOption === 'hotel' &&
          <section className='w-full  p-4'>


            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2  pt-0 pl-0 w-full  ">
              <div className="border border-gray-300 outline-none w-full   h-[65px] rounded-l-xl flex p- gap-2 cursor-pointer">
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

              <div className="border border-gray-300 outline-none w-full h-[65px]  flex p-1 gap-2 cursor-pointer">
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

              <div className="hidden border border-gray-300 outline-none w-full  h-[65px]  lg:flex p-1 gap-2 cursor-pointer">
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
            </div>

            <div className="lg:hidden border my-2 border-gray-300 outline-none w-full  h-[65px]  flex p-1 gap-2 cursor-pointer">
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

            <div className='lg:flex items-center justify-center'>
              <div className="border w-full lg:w-40  h-[65px] bg-[#F0721D] rounded-lg lg:rounded-r-xl lg:mt-2 flex items-center justify-center  group cursor-pointer">
                <p className="text-xs text-white transition-all ease-linear duration-300 group-hover:opacity-0">
                  Search..
                </p>
                <button className="text-3xl text-white absolute transition-all ease-linear duration-300 opacity-0 group-hover:opacity-100">
                  <SearchIcon />
                </button>
              </div>
            </div>
          </section>
        }


        {searchOption === 'tour' &&
          <section className='w-full'>

            <div onClick={(e) => {
              e.stopPropagation();
              setShowTourSearchBar(!showTourSearchBar);
            }} className="flex items-start w-full  p-4 pt-0 pl-0">
              <div className="border border-gray-300 outline-none w-full h-[65px] rounded-l-xl flex p-1 gap-2 cursor-pointer relative">
                <div className="flex items-center">
                  <button className="text-[#F0721D]">
                    <LocationIcon />
                  </button>
                </div>

                <div className="flex  flex-col ">
                  <p className="text-xs text-gray-500">Location/From</p>
                  <h3 className="text-lg font-bold">{address ? address : 'Your location'}</h3>
                </div>


                {showTourSearchBar ? <div ref={locationListRef} className='w-full lg:w-[43%] h-96 absolute top-[70px] z-10 p-2 bg-white shadow-primaryShadow rounded-lg '>
                  <div className='w-full h-10  flex items-center relative border-b border-gray-400'>
                    <SearchIcon className='absolute text-gray-500' />
                    <input
                     onClick={(e) => e.stopPropagation()}
                     onChange={(e) => {setSearchLocation(e.target.value);}}
                     defaultValue={address}
                    className='w-full h-full text-xs pl-4 outline-none' type="text" placeholder='Type to search' />
                  </div>

                  <div className='w-full h-80 overflow-scroll mt-1'>
                    {filterLocation.map(location => <p
                    onClick={() => {setAddress(location.title)}}
                     key={location.id}
                    className='text-xs p-2 rounded-lg hover:bg-[#E4E9F1] flex items-center gap-2'><LocationIcon className='text-gray-500'/> {location.title}</p>) }
                  </div>
                </div> : ''}
              </div>


            </div>

            <div className='lg:flex items-center justify-center'>
              <div onClick={() => {
                console.log(address);
                
              }} className="border w-full lg:w-40 h-[65px] bg-[#F0721D] rounded-lg lg:rounded-r-xl flex items-center justify-center  group cursor-pointer">
                <p className="text-xs text-white transition-all ease-linear duration-300 group-hover:opacity-0">
                  Search..
                </p>
                <button className="text-3xl text-white absolute transition-all ease-linear duration-300 opacity-0 group-hover:opacity-100">
                  <SearchIcon />
                </button>
              </div>
            </div>
          </section>
        }
      </div>
    </div>
  );
};

export default SearchOption;