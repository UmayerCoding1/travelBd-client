import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
const ImageSlider = ({image,rating}) => {
    return (
        <div className="w-full h-52 lg:h-60 relative">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
           {image?.map((img, i) => (
              <SwiperSlide key={i}>
                 <img className="w-full h-full object-cover" src={img} alt="" />
              </SwiperSlide>
           ))}
        </Swiper>
  
       
     </div>
    );
};

export default ImageSlider;