import React, { useContext } from 'react';
import Banner from './banner/Banner';
import About from './about/About';
import { ReloadLoadingContext } from '../../../utils/loading';
import Service from './service/Service';
import Destination from './destination/Destination';
import Review from './review/Review';
import SearchOption from './searchOption/SearchOption';
import Loading from '../../shared/loading/Loading';
import ReloadAnimation from '../../shared/reload-animation/ReloadAnimation';



const Home = () => {
    const {skeletonLoading} = useContext(ReloadLoadingContext);
    
    return (
        <div>
          
           
            
            <>
              <Banner/>
              <SearchOption/>
              <About/>
              <Service/>
              <Destination/>
              <Review/>
              {/* <ReloadAnimation/> */}
            </>
           
            
            
        </div>
    );
};

export default Home;