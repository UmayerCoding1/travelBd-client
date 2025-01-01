import React, { createContext, useEffect, useState } from 'react';
import UseAxiosPublic from '../hooks/UseAxiosPublic';
import toast from 'react-hot-toast';


export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null);
    const [loading,setLoading]= useState(true);
    const axiosPublic = UseAxiosPublic();


    const createUser = (userData) => {
        setLoading(true);
       return  axiosPublic.post('/register', userData)
    }


    const loginUser = (loginData) => {
        setLoading(true);
      return axiosPublic.post('/login',loginData)
    }

    const logoutUser = async () => {
        setLoading(true);
        await axiosPublic.post('/logout')
        .then(res => {
            console.log(res.data.message);
             setUser(null)
             setLoading(false);
        })
        .catch((error) => {
            console.log(error.message);
        })
    }

    
    useEffect(() => {
        
        const storeUser = async () => {
        const res =  await axiosPublic.get('/refresh');
         try {
            if(res.data?.data){
                setUser(res.data.data);
                setLoading(false);
                console.log('currentUser', res.data.data);
              }
         } catch (error) {
            console.log(error.message);
         }
         finally{
            setLoading(false)
         }

         
        }

    setTimeout(() => {
        !user ? setLoading(false) : console.log(false);
    },1000)
   
   
        storeUser();
        
 
    },[axiosPublic])
    
    
    const authInfo ={
        setUser,
        user,
        setLoading,
        loading,
      createUser,
      loginUser,
      logoutUser
    }
    return <AuthContext.Provider value={authInfo}>
           {children}
    </AuthContext.Provider>
    
};

export default AuthProvider;