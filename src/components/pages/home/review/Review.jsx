import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../shared/sectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Rating } from '@mui/material';
import reviewImg from './../../../../assets/image/review_img.JPG'


const Review = () => {
    const [reviews,setReviews]= useState([]);
    useEffect(() => {
        fetch('review.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    
    
    return (
        <div className='w-full mt-20 lg:h-[50vh] p-2 lg:flex items-center justify-between'>
            <div className='lg:w-1/2'>

            <div className='lg:w-full flex flex-col items-center justify-center lg:block'>
           <SectionTitle title={'What they say'}/>
           <h2 className='text-4xl lg:text-5xl font-semibold'>What Out Customers</h2>
           <h2 className='text-4xl lg:mt-2'>Say about Us</h2>
            </div>

            <div className='w-full  lg:w-1/2  mt-10 lg:my-5'>
            
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                {reviews?.map(review => {
                    const{_id,user_name,user_avatar,post_date,comment,rating}=review;
                    return([
                        <SwiperSlide key={_id}>
                    <div className='w-full h-40'>
                        <div className='flex items-center gap-2'>
                            <img className='!w-10 !h-10  rounded-full' src={user_avatar} alt={`${user_name}'s avatar`} />

                            <div>
                                <p className='font-semibold text-xs'>{user_name}</p>
                                <p className='text-xs'>{post_date}</p>
                                <Rating style={{fontSize: '15px', padding:'0'}}  name="read-only" value={rating} readOnly />
                            </div>
                        </div>

                        <div className='mt-2'>
                            <p className='text-xs'>{comment}</p>
                        </div>
                    </div>
                </SwiperSlide>
                    ])
                })}
        
      </Swiper>
            </div>
            </div>


            <div className='w-full h-full hidden lg:block'>
                <img className=' h-full rounded-lg' src={reviewImg} alt="" />
            </div>

           
        </div>
    );
};

export default Review;