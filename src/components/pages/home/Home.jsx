import React, { useContext } from 'react';
import Banner from './banner/Banner';
import About from './about/About';
import { SkeletonContext } from '../../../utils/loading';
import Service from './service/Service';
import Destination from './destination/Destination';
import Review from './review/Review';
import SearchOption from './searchOption/SearchOption';


const Home = () => {
    const {skeletonLoading} = useContext(SkeletonContext);
    
    return (
        <div>
           {skeletonLoading ? <Banner/> : 
            
            <>
              <Banner/>
              <SearchOption/>
              <About/>
              <Service/>
              <Destination/>
              <Review/>
            </>
           }
            
            
        </div>
    );
};

export default Home;