import React, { useState } from 'react';
import { EditIcon, ProfileIcon, GroupIcon, SettingsIcon, } from '../../../../provider/IconProvider';
import useAuth from '../../../../hooks/useAuth';
import Logout from '../../../shared/logout/Logout';
import BasicInfoForm from './BasicInfoForm';
import BasicInfo from './BasicInfo';

const Profile = () => {
    const [updatePersonalInfo, setUpdatePersonalInfo] = useState(false);
    const { user } = useAuth();
    const liStyle = 'flex items-center gap-2 text-xl font-semibold text-gray-600 p-3 rounded-lg hover:bg-[#E1F2F8] cursor-pointer'
    return (
        <div className='  lg:p-20 pt-5 lg:grid grid-cols-4 gap-6'>
            <div className='bg-white shadow-lg w-full mb-5 lg:h-[55vh] col-span-1 p-1 pr-1 pt-2 '>
                <div className='w-full flex items-center justify-between lg:justify-start  lg:gap-5'>
                    {user?.avatar ? <img className='cursor-default w-28 h-28 rounded-full' src={user?.avatar} alt='profile image' />
                        :
                        <button className='bg-[#E1F2F8] border border-blue-900 cursor-default w-28 h-28 rounded-full flex items-center justify-center'><ProfileIcon className='text-5xl text-[#51B5D7]' /></button>}

                    <div className="flex items-center gap-2 ">
                        <label
                            htmlFor="fileUpload"
                            className="flex items-center px-4 py-2 cursor-pointer"
                        >
                            <EditIcon className="text-2xl" /> <span className="font-semibold">Edit</span>
                            <input type="file" id="fileUpload" className="hidden" />
                        </label>

                    </div>
                </div>

                <ul className='mt-4'>
                    <li className={`${liStyle}`}><ProfileIcon /> <span className='text-xs'>Personal Info</span></li>
                    <li className={`${liStyle}`}><GroupIcon /> <span className='text-xs'> Travelers</span></li>
                    <li className={`${liStyle}`}><SettingsIcon /> <span className='text-xs'> Setting</span></li>
                    <Logout style={'flex items-center gap-2 text-xs font-semibold  p-3 rounded-lg hover:bg-red-50 text-red-500'} />
                </ul>



            </div>




            <div className='bg-white shadow-lg  w-full col-span-3 p-5'>
                {
                    updatePersonalInfo ? <BasicInfoForm action={setUpdatePersonalInfo}/> : <BasicInfo action={setUpdatePersonalInfo}/>
                }



            </div>
        </div>
    );
};

export default Profile;