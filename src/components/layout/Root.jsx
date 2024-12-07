import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../shared/navbar/Navbar';
import Footer from '../shared/footer/Footer';

const Root = () => {
    return (
        <div>
           <Navbar/>
           <div>
            <Outlet/>
           </div>

           <Footer/>
        </div>
    );
};

export default Root;