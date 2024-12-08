import React from 'react';
import aboutImg1 from '../../../../assets/image/about/about1.jpg';
import aboutImg2 from '../../../../assets/image/about/about2.jpg';
import aboutImg3 from '../../../../assets/image/about/about3.jpg';
import SectionTitle from '../../../shared/sectionTitle/SectionTitle';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


const About = () => { 
    return (
        <div className='lg:flex gap-2 '>
           <div className='w-full h-[50vh] lg:h-[70vh] lg:w-1/2 relative '>
              <img data-aos="fade-right" className='w-full lg:w-[60%] h-full lg:h-[90%] rounded-lg' src={aboutImg1} alt="" />
              <img data-aos="fade-up-left" className='absolute w-52 top-1/2 right-0 lg:top-[38%] lg:right-20 rounded-2xl border-4 border-white' src={aboutImg2} alt="" />
              <img data-aos="fade-down-left" className='w-48 absolute top-0 lg:right-10 rounded-badge  border-4 border-white' src={aboutImg3} alt="" />
           </div>


           <div className='lg:w-1/2 mt-10 lg:mt-0'>
              <SectionTitle title={'About'}/>

              <div className='mt-3'>
                 <h1 className='text-5xl font-bold'>We  Recommend</h1>
                 <h1 className='text-4xl mt-2'>Beautiful Destinations</h1>
                 <h1 className='text-4xl mt-2'>Every Month</h1>


                 <p className='mt-4 text-xs'>
                 Let’s  chose your dream destination here we  provide many destination and we offer the bast
                 destination every  week.
                 </p>
              </div>


              <div className='grid grid-cols-2 gap-2 lg:grid-cols-3 mt-5 lg:mt-10'>
                <div data-aos="flip-up" className='bg-[#E7E7E7] w-40 h-20 flex flex-col items-center justify-center rounded-lg hover:shadow-lg'>
                    <h2 className='text-3xl font-semibold'>1500+</h2>
                    <p>our explorers</p>
                </div>

                <div data-aos="flip-up" className='bg-[#E7E7E7] w-40 h-20 flex flex-col items-center justify-center rounded-lg hover:shadow-lg'>
                    <h2 className='text-3xl font-semibold'>100+</h2>
                    <p>Destination</p>
                </div>
                
                <div data-aos="flip-up" className='bg-[#E7E7E7] mt-3 lg:mt-0 w-40 h-20 flex flex-col items-center justify-center rounded-lg hover:shadow-lg'>
                <h2 className='text-3xl font-semibold'>5+</h2>
                <p>Year’s experience</p>
                </div> 
              </div>
           </div>
        </div>
    );
};

export default About;