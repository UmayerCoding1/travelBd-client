import React, { useEffect, useState } from 'react';
import { EditIcon, ProfileIcon, GroupIcon, SettingsIcon, BookingIcon, HeartICon, } from '../../../../provider/IconProvider';
import useAuth from '../../../../hooks/useAuth';
import Logout from '../../../shared/logout/Logout';
import BasicInfoForm from './BasicInfoForm';
import BasicInfo from './BasicInfo';
import useLoggedUserData from '../../../../hooks/useLoggedUserData';
import toast, { Toaster } from 'react-hot-toast';
import { NavLink } from 'react-router';
import Tooltip from '../../../shared/tooltip/Tooltip';

import useSecureApiEndPoint from '../../../../hooks/useSecureApiEndPoint';


const Profile = () => {
    const [loading, setLoading] = useState(false);
    const [updatePersonalInfo, setUpdatePersonalInfo] = useState(false);
    const [user, setUser] = useState();
    const {setUser: updateSetUser} = useAuth();
    const apiEndPoint = useSecureApiEndPoint();
    const [LoggedUser, loggedUserRefetch] = useLoggedUserData();
    useEffect(() => {
        if (LoggedUser && LoggedUser.length > 0) {
            setUser(LoggedUser[0]);
        }
    }, [LoggedUser]);
    const liStyle = 'flex items-center gap-2 text-xl font-semibold text-gray-600 p-3 rounded-lg hover:bg-[#E1F2F8] cursor-pointer';

    const handleUpdateAvatar = async (e) => {
        const avatarImage = e.target.files[0];
        const formData = new FormData();
        formData.append('avatar', avatarImage);
        setLoading(true);
console.log(avatarImage);

        const response = await apiEndPoint.put('/update-avatar', formData);
        if (response.data.data) {
            console.log(response.data.data);
            updateSetUser(response.data.data)
            toast.success(response.data.message);
            setLoading(false)
            loggedUserRefetch();
        }


    }
    return (
        <div className='  lg:p-20 pt-5 lg:grid grid-cols-4 gap-6'>
            <div className='bg-white shadow-lg w-full mb-5 lg:h-[45vh] col-span-1 p-1 pr-1 pt-2 '>
                <div className='w-full flex items-center justify-between lg:justify-start  lg:gap-5'>
                    {user?.avatar ? <img className='cursor-default w-28 h-28 rounded-full' src={user?.avatar} alt='profile image' />
                        :
                        <button className='bg-[#E1F2F8] border border-blue-900 cursor-default w-28 h-28 rounded-full flex items-center justify-center'><ProfileIcon className='text-5xl text-[#51B5D7]' /></button>}

                    {loading ? <p className='text-xs text-gray-500'>Avatar image update...</p>
                        :
                        <div className="flex items-center gap-2 ">
                            <label
                                htmlFor="fileUpload"
                                className="flex items-center px-4 py-2 cursor-pointer"
                            >
                                <EditIcon className="text-2xl" /> <span className="font-semibold">Edit</span>
                                <input onChange={handleUpdateAvatar} type="file" name='avatar' id="fileUpload" className="hidden" />
                            </label>
                        </div>
                    }
                </div>

                <ul className='mt-4'>
                    <li><NavLink className={`${liStyle}`} to={'/my-booking'}><BookingIcon /> <span className='text-xs'>My Booking</span></NavLink></li>
                    <li><NavLink className={`${liStyle}`} to={'/Saved'}><HeartICon /> <span className='text-xs'>Saved</span></NavLink></li>
                    <Logout style={'flex items-center gap-2 text-xs font-semibold  p-3 rounded-lg hover:bg-red-50 text-red-500'} />
                </ul>



            </div>




            <div className='bg-white shadow-lg  w-full col-span-3 p-5'>
                {
                    updatePersonalInfo ? <BasicInfoForm action={setUpdatePersonalInfo} /> : <BasicInfo action={setUpdatePersonalInfo} />
                }



            </div>
            <Tooltip/>
            <Toaster containerStyle={false} position='bottom-right' />
        </div>
    );
};

export default Profile;