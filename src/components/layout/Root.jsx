import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../shared/navbar/Navbar';
import Footer from '../shared/footer/Footer';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto mt-5 p-2 lg:p-0'>
           <Navbar/>
           <div>
            <Outlet/>
           </div>

           <Footer/>
        </div>
    );
};

export default Root;