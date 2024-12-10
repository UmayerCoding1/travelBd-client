import React, { useContext } from 'react';
import Banner from './banner/Banner';
import About from './about/About';
import { SkeletonContext } from '../../../utils/loading';
import Service from './service/Service';


const Home = () => {
    const {skeletonLoading} = useContext(SkeletonContext);
    
    return (
        <div>
           {skeletonLoading ? <Banner/> : 
            
            <>
              <Banner/>
              <About/>
              <Service/>
            </>
           }
            
            
        </div>
    );
};

export default Home;