import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import DataPicker from './DatePicker';
import { CloseIcon, DownIcon } from '../../../../provider/IconProvider';

const BasicInfoForm = ({ action }) => {
  const [showGender,setShowGender]= useState(false);
  const [showMS,setShowMS]= useState(false);// MS = Marital Status
  const [showReligion,setShowReligion] = useState(false);
  const [selectSenderText,setSelectGenderText] = useState('Select Gender');
  const [mSText,setMSText]= useState('Select Marital Status'); // MS = Marital Status
  const [selectReligionText,setSelectReligionText] = useState('Select Religion');
  const bodyEl = document.querySelector('body');
  const rootEl = Array.from(bodyEl.children).filter(child => child.tagName === 'DIV');
  const hideGenderRef = useRef(null);
  const hideMSRef = useRef(null); // MS = Marital Status
  const hideReligionRef = useRef(null);
  const genderData = ['Male','Female'];
  const MSData = ['Single','Married']; // MS = Marital Status
  const regionData = [
    'Islam',
    'Hindu',
    'Christianity',
    'Buddhism',
    'Others'
  ]
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
      const onSubmit = async(data) => {
        console.log(data);
      }

      const handleUpdateInfo = (e) => {
        e.preventDefault();
        handleSubmit(onSubmit)(e)
      }
    
     

       useEffect(() => {
        const handleOutsideClick = (e) => {
          if (hideGenderRef.current && !hideGenderRef.current.contains(e.target)) {
            setShowGender(false);
          }
           if (hideMSRef.current && !hideMSRef.current.contains(e.target)) {
            setShowMS(false);
          }
           if (hideReligionRef.current && !hideReligionRef.current.contains(e.target)) {
            setShowReligion(false);
          }
        };
        
        document.addEventListener("click", handleOutsideClick);
        return () => {
          document.removeEventListener("click", handleOutsideClick);
        };
      }, []);
     
    return (
        <div>
            <h2 className='text-xl font-bold'>Edit Profile</h2>
            <h2 className='text-lg font-semibold text-gray-500 mt-2'>Basic Info</h2>

            <form className='mt-3' onSubmit={handleUpdateInfo}>
                <section className='lg:flex w-full gap-2  mb-5'>
                  <div className='w-full lg:w-1/2'>
                      <label className='text-xs text-gray-700' htmlFor="full-name">First Name</label> <br />
                      <input
                        className='border border-gray-500 rounded-md w-full h-10 text-xs pl-2 outline-none'
                        type="text"
                        {...register('firstName', {required: true})}
                      />
                  </div>

                  <div className='w-full lg:w-1/2'>
                      <label className='text-xs text-gray-700' htmlFor="last name">Last Name</label> <br />
                      <input
                        className='border border-gray-500 rounded-md w-full h-10 text-xs pl-2 outline-none'
                        type="text"
                      />
                  </div>
                </section>

                <section className='lg:flex w-full gap-2 items-center mb-5'>
                  <div className='w-full lg:w-1/2'>
                      <label className='text-xs text-gray-700 pl-3' htmlFor="Date of Birth">Date of Birth</label> <br />
                      
                      <DataPicker/>
                  </div>
               

                  <div className='w-full lg:w-1/2'>
                      <label className='text-xs text-gray-700' htmlFor="National ID">National ID</label> <br />
                      <input
                        className='border border-gray-500 rounded-md w-full h-10 text-xs pl-2 outline-none'
                        type="text"
                      />
                  </div>
                </section>

                <section className='lg:flex items-center gap-2 mb-5'>
                  <div className='w-full lg:w-1/2 relative ' ref={hideGenderRef}>
                  <label className='text-xs text-gray-700' htmlFor="gender">Gender</label>
                    <div onClick={(e) => {
                      e.stopPropagation();
                      setShowGender(!showGender)
                    }} className='w-full h-10 flex items-center justify-between cursor-pointer border border-gray-500 outline-none rounded-md pl-2 text-xs transition-all duration-300 ease-in-out '>
                       <p className=''>{selectSenderText}</p>
                       {showGender ? <CloseIcon className='text-lg mr-1'/> : <DownIcon className='text-lg mr-1'/>}
                    </div>

                    {showGender ? <div className='w-full  shadow-xl border border-gray-300 rounded-lg mt-1 absolute z-10 bg-white'>
                         {genderData.map(item => <p key={item} onClick={() => {
                          setShowGender(!showGender);
                          setSelectGenderText(item)
                         }}
                          className='text-xs p-2  m-1 mt-1 rounded-lg cursor-pointer hover:bg-[#E1F2F8] transition-all duration-200 ease-in'>{item}</p>)}
                    </div> : ''}
                   </div>

                   <div className='w-full lg:w-1/2 relative ' ref={hideMSRef}>
                   <label className='text-xs text-gray-700 ' htmlFor="Marital Status">Marital Status</label>
                    <div onClick={(e) => {
                      e.stopPropagation();
                      setShowMS(!showMS);
                    }} className='w-full h-10 flex items-center justify-between cursor-pointer border border-gray-500 outline-none rounded-md pl-2 text-xs transition-all duration-300 ease-in-out '>
                       <p className=''>{mSText}</p>
                       {showMS ? <CloseIcon className='text-lg mr-1'/> : <DownIcon className='text-lg mr-1'/>}
                    </div>

                    {showMS ? <div className='w-full  shadow-xl border border-gray-300 rounded-lg mt-1 absolute z-10 bg-white'>
                         {MSData.map(item => <p key={item} onClick={() => {
                          setShowMS(!showMS);
                          setMSText(item)
                         }}
                          className='text-xs p-2  m-1 mt-1 rounded-lg cursor-pointer hover:bg-[#E1F2F8] transition-all duration-200 ease-in'>{item}</p>)}
                    </div> : ''}
                   </div>
                </section>


                <section className='lg:flex items-center gap-2'>
                  <div className='w-full lg:w-1/2 relative ' ref={hideReligionRef}>
                  <label className='text-xs text-gray-700' htmlFor="gender">Religion</label>
                    <div onClick={(e) => {
                      e.stopPropagation();
                      setShowReligion(!showReligion)
                    }} className='w-full h-10 flex items-center justify-between cursor-pointer border border-gray-500 outline-none rounded-md pl-2 text-xs transition-all duration-300 ease-in-out '>
                       <p className=''>{selectReligionText}</p>
                       {showGender ? <CloseIcon className='text-lg mr-1'/> : <DownIcon className='text-lg mr-1'/>}
                    </div>

                    {showReligion ? <div className='w-full  shadow-xl border border-gray-300 rounded-lg mt-1 absolute z-10 bg-white'>
                         {regionData.map(item => <p key={item} onClick={() => {
                          setShowReligion(!showReligion);
                          setSelectReligionText(item)
                         }}
                          className='text-xs p-2  m-1 mt-1 rounded-lg cursor-pointer hover:bg-[#E1F2F8] transition-all duration-200 ease-in'>{item}</p>)}
                    </div> : ''}
                   </div>

                   <div className='w-full lg:w-1/2'>
                      <label className='text-xs text-gray-700' htmlFor="Emergency Contact">Emergency Contact(Number)</label> <br />
                      <input
                        className='border border-gray-500 rounded-md w-full h-10 text-xs pl-2 outline-none'
                        type="number"
                        placeholder='01XXXXXXXXX'
                      />
                  </div>
                </section>

                   <hr  className='mt-5 bg-gray-600'/>


                   <div className='flex items-center justify-end gap-2 mt-5'>
                    <button className=' w-20 h-10 text-[15px] border border-[#00026E] text-[#00026E] rounded-lg' type='button'>Clear</button>
                    <button className='w-20 h-10 bg-[#00026E] text-white rounded-lg' type='submit'>Save</button>
                   </div>
            </form>
        </div>
    );
};

export default BasicInfoForm;