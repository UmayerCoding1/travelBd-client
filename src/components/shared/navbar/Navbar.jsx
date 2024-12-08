import React from 'react';
import { logo } from '../../../provider/ImageProvider';
import { NavLink } from 'react-router';
import { RightArrowIcon } from '../../../provider/IconProvider';

const Navbar = () => {
    const navLink = <>
      <li className='font-semibold mr-5 text-[13px]'><NavLink to={'/'}>Home</NavLink></li>
      <li className='font-semibold mr-5 text-[13px]'><NavLink to={'/hotel'}>Hotel</NavLink></li>
      <li className='font-semibold mr-5 text-[13px]'><NavLink to={'/destinations'}>Destinations</NavLink></li>
      <li className='font-semibold mr-5 text-[13px]'><NavLink to={'/travel-blog'}>Travel Blog</NavLink></li>
      <li className='font-semibold mr-5 text-[13px]'><NavLink to={'/contact-us'}>Contact Us</NavLink></li>
    </>
    return (
        <header>
           <nav className='flex items-center justify-between'>
             <img className='w-40' src={logo} alt="" />

             <ul className=' hidden lg:flex'>
               {navLink}
             </ul>

             <div>
                <button className='flex items-center justify-center bg-[#F0721D] w-20 h-8 rounded-lg text-xs text-white transition-all ease-linear duration-200 overflow-hidden hover:text-[13px] hover:font-bold'>Sign In <RightArrowIcon/></button>
             </div>
           </nav>
        </header>
    );
};

export default Navbar;