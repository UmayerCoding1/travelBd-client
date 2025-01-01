import React, { useEffect, useRef, useState } from 'react';
import { logo, userImg } from '../../../provider/ImageProvider';
import { Link, NavLink } from 'react-router';
import { ArrowDownIcon, BookingIcon, HeartICon, LogoutIcon, ProfileIcon, RightArrowIcon } from '../../../provider/IconProvider';
import useAuth from '../../../hooks/useAuth';
import Logout from '../logout/Logout';

const Navbar = () => {
  const [showUserNav, setShowUserNav]= useState(false);
  const {user} = useAuth();
  const hideUserNavRef = useRef(null);
    const navLink = <>
      <li className='font-semibold mr-5 text-[13px]'><NavLink to={'/'}>Home</NavLink></li>
      <li className='font-semibold mr-5 text-[13px]'><NavLink to={'/hotel'}>Hotel</NavLink></li>
      <li className='font-semibold mr-5 text-[13px]'><NavLink to={'/destinations'}>Destinations</NavLink></li>
      <li className='font-semibold mr-5 text-[13px]'><NavLink to={'/travel-blog'}>Travel Blog</NavLink></li>
      <li className='font-semibold mr-5 text-[13px]'><NavLink to={'/contact-us'}>Contact Us</NavLink></li>
    </>

    const userNavItem = <>
       <li><NavLink className={'flex items-center gap-2 text-white mt-5 font-[500] hover:text-orange-500 '} to={'/profile'}><ProfileIcon/> Profile</NavLink></li>
       <li><NavLink className={'flex items-center gap-2 text-white mt-5 font-[500] hover:text-orange-500'} to={'/my-booking'}><BookingIcon/> My Booking</NavLink></li>
       <li><NavLink className={'flex items-center gap-2 text-white mt-5 font-[500] hover:text-orange-500'} to={'/Saved'}><HeartICon/> Saved</NavLink></li>

       <Logout style={'flex items-center gap-2 text-red-500 mt-5 font-[500] cursor-pointer hover:text-red-500'}/>
    </>

useEffect(() => {
  const handleOutsideClick = (e) => {
    if (hideUserNavRef.current && !hideUserNavRef.current.contains(e.target)) {
      setShowUserNav(false);
    }
  };
  document.addEventListener("click", handleOutsideClick);

  return () => {
    document.removeEventListener("click", handleOutsideClick);
  };
}, []);
    return (
        <header>
           <nav className='flex items-center justify-between'>
             <img className='w-40' src={logo} alt="" />

             <ul className=' hidden lg:flex'>
               {navLink}
             </ul>

             <div>

              {user ? <div>

                <div onClick={(e) => {
                  e.stopPropagation();
                  setShowUserNav(!showUserNav)
                }} className='flex items-center cursor-pointer relative'>
                <img className='w-8 h-8 rounded-full' src={user.avatar ? user.avatar : userImg} alt="" />
                <ArrowDownIcon className='text-gray-500'/>


                <div ref={hideUserNavRef} className={`bg-[#000] shadow-2xl w-44  p-3 absolute z-10 top-10 left-[-140px] ${showUserNav ? '' : 'hidden'}`}>
                    <ul>
                      {userNavItem}
                    </ul>
                </div> 
                </div>
                 
                 
                
              </div>
              :
              <Link to={'/sign-in'}>
                  <button className='flex items-center justify-center bg-[#F0721D] w-20 h-8 rounded-lg text-xs text-white transition-all ease-linear duration-200 overflow-hidden hover:text-[13px] hover:font-bold'>Sign In <RightArrowIcon/></button>
              </Link> 
              }
              
             </div>
           </nav>
        </header>
    );
};

export default Navbar;