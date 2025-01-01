import React from 'react';
import { FaEdit as EditIcon } from 'react-icons/fa';

const BasicInfo = ({action}) => {
    return (
       <div className='flex justify-between items-center'>
                    <div>
                        <h2 className='text-xl font-bold'>Profile</h2>
                        <p className='text-xs text-gray-500'>Basic info, for a faster booking experience</p>
                    </div>

                    <button onClick={() => action(true)} className='flex gap-1'> <EditIcon className='text-2xl' /> <span className='font-semibold'>Edit</span></button>
                 </div>
    );
};

export default BasicInfo;