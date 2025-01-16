import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { logo } from '../../../provider/ImageProvider';
import useAuth from '../../../hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';
import { CloseIcon } from '../../../provider/IconProvider';
import Loading from '../../shared/loading/Loading';
const SignIn = () => {
    const [showForgotPassword,setForgotPassword] = useState(false);
    const [loading,isLoading] = useState(false);
    const {loginUser,setUser,setLoading} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const navigateForm = location.state?.form?.pathname || '/';
    
    
    const handleSignIn = (e) => {
       e.preventDefault();
       const from = e.target;
       const email = from.email.value;
       const password = from.password.value;
       const loginData = {email,password};
       
       loginUser(loginData)
       .then(res => {
        if(res.data.data.user){
          setUser(res.data.data.user);
          localStorage.setItem('accessToken', res.data.data.accessToken)
          setLoading(false);
          toast.success(res.data.message);

          setTimeout(() => {
            navigate(navigateForm)
          },500)
        }
        
       })
       .catch(err => {
         err.status === 404 ?  toast.error('Email is not exist', {duration: 1000}): null
         err.status === 401 ? toast.error('Password is not valid', {duration: 1000}) : null;
         if (err.status !== 404 && err.status !== 401) {
             toast.error(err.message, {duration: 500});
         }
       })
       
    }
    return (
        <div className='flex items-center justify-center lg:h-screen bg-[#DADBDD] lg:p-10 relative'>
            
            <div className='bg-white h-screen w-full  flex items-center justify-center'>
               
               <div className='w-full lg:w-[40%] lg:p-5 pb-0 '>
            
             <form onSubmit={handleSignIn} className=' p-5 lg:p-16 pt-5 border'>
                <div>
                    <h2 className='text-3xl font-bold'>Sign In</h2>
                    
                </div>


               

                <div className='bg-gray-200 h-14 mt-5 p-2 rounded-lg relative'>
                    <p className='text-xs font-bold absolute top-2 z-10 font-Inconsolata' >Email</p> <br />
                    <input className='outline-none absolute text-xs pt-2 top-0 left-0 pl-2 bg-transparent w-full h-full ' type="email" name='email' placeholder='abc@gmail.com' autoComplete='email'/>
                </div>

                <div className='bg-gray-200 h-14 mt-5 p-2 rounded-lg relative'>
                    <p className='text-xs font-bold absolute top-2 z-10 font-Inconsolata' >Password</p> <br />
                    <input className='outline-none absolute text-xs pt-2 top-0 left-0 pl-2 bg-transparent w-full h-full ' type="password" name='password' placeholder='type hear' autoComplete='current-password'/>
                </div>
                 <p onClick={() => {
                    isLoading(true);
                    setTimeout(() => {
                        setForgotPassword(true);
                        isLoading(false)
                    },2000)
                 }} className='text-xs underline text-blue-500 inline-block float-right pt-1 cursor-pointer'>Forgot password</p>
                 {loading && <div className='w-full h-screen bg-black/50 absolute left-0 top-0 z-10 flex items-center justify-center'>
                       <Loading/>
                    </div>}

                 {
                    showForgotPassword &&    <div className='w-full h-screen bg-black/50 absolute left-0 top-0 z-10 flex items-center justify-center'>
                    <div className='w-[400px] h-[450px] bg-white rounded-lg p-3'>
                      <div className='flex items-center justify-between'>
                       <img className='w-40' src={logo} alt="" />
                       <CloseIcon onClick={() => setForgotPassword(false)} className='w-8 h-8 text-lg bg-gray-200 text-gray-600 p-2 rounded-full cursor-pointer '/>
                      </div>
                         

                       <form className='mt-10 p-5'>
                           <div className='mb-3'>
                               <label className='text-xs pl-1 font-semibold' htmlFor="old-pass">Old password</label>
                               <input className='w-full h-10 outline-none bg-gray-100 rounded-lg text-xs pl-2' type="password" name="" placeholder='Type hear...'/>
                           </div>
                           <div className='mb-3'>
                               <label className='text-xs pl-1 font-semibold' htmlFor="new-pass">New password</label>
                               <input className='w-full h-10 outline-none bg-gray-100 rounded-lg text-xs pl-2' type="password" name="" placeholder='Type hear...'/>
                           </div>
                           <div className='mb-3'>
                               <label className='text-xs pl-1 font-semibold' htmlFor="Retype -new-pass">Retype new password</label>
                               <input className='w-full h-10 outline-none bg-gray-100 rounded-lg text-xs pl-2' type="password" name="" placeholder='Type hear...'/>
                           </div>

                           <button className='w-full h-10 bg-blue-500 rounded-lg text-xs font-bold text-white' type='submit'>Update password</button>
                       </form>
                    </div>
                </div>
                 }
              

                <div>
                    <button className='w-full h-10 rounded-lg mt-3 font-semibold bg-black text-white text-xs' type='submit'>Sign In</button>
                </div>
                <p className='text-xs mt-2 text-center font-semibold'> Create a new account? <Link to={'/sign-up'} className='link'>Sign Up</Link></p>
             </form>
           </div>
           <Toaster position='top-center' reverseOrder={false}/>
            </div>
        </div>
    );
};

export default SignIn;