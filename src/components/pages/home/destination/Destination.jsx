import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../shared/sectionTitle/SectionTitle';
import Card from '../../../shared/card/Card';

const Destination = () => {
    const [pleases,setPleases] = useState([]);
    useEffect(() => {
        fetch('destination.json')
        .then(res => res.json())
        .then(data => {
            setPleases(data)
        });
    },[])
    return (
        <div className=' mt-20'>
            <div className='flex flex-col items-center justify-center'>
              <SectionTitle title={'Top Destination'}/>
              <h2 className='text-3xl lg:text-5xl text-center '><span className='font-bold'>Let’s Explore</span> Your Dream  <br />
              Destination Here!
              </h2>
              <p className='text-xs text-center '>We have recommended every week so you don’t have to worry about your dream destination  with travel</p>
            </div>


            <div className='lg:grid grid-cols-3 gap-10 mt-10'>
                 {pleases?.map((please,i) => <Card key={i} please={please}/>)}
            </div>

            <div className='flex items-center justify-center mt-3'>
                <button className='p-2 text-center rounded-lg  text-white text-xs font-semibold  bg-orange-500 '>View More</button>
            </div>
            
        </div>
    );
};

export default Destination;