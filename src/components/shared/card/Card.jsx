import React from 'react';
import { LocationIcon } from '../../../provider/IconProvider';
import ImageSlider from '../image-slider/ImageSlider';
import { Rating } from '@mui/material';
const Card = ({please}) => {
    const {image,location,title,rating,Price} = please;
    return (
        <div className="w-full lg:max-w-xs h-auto shadow-xl p-4 my-4 lg:my-0">
         <ImageSlider image={image} rating={rating}/>
   <div>
      <div className='flex items-center justify-between'>
      <p className="flex items-center text-sm m-2">
         <LocationIcon className="text-orange-500 mr-2" /> {location}
      </p>

      <Rating style={{fontSize: '18px'}} name="read-only" value={rating} readOnly />
      </div>
      <h2 className="text-lg font-bold my-2">{title}</h2>

      <div className="flex items-center justify-between gap-4">
         <p className="text-sm font-medium">
            <span className="text-orange-500">৳{Price}</span>/per person
         </p>

         <button className="w-20 h-8 bg-orange-500 text-white rounded-lg text-xs">
            View 
         </button>
      </div>
   </div>
</div>
    );
};

export default Card;