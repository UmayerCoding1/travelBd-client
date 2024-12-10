import React, { createContext, useEffect, useState } from 'react';
import UseAxiosPublic from '../hooks/UseAxiosPublic';


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

    const logoutUser = () => {
        setLoading(true);
        axiosPublic.post('/logout')
        .then(res => {
             setUser('')
             setLoading(false)
        })
        .catch((error) => {
            console.log(error.message);
        })
    }

    
    useEffect(() => {
        setLoading(true);
        const storeUser = async () => {
            await axiosPublic.get('/refresh')
        .then(res => {
            if(res.data.data){
              setUser(res.data.data);
              setLoading(false);
              console.log('currentUser', res.data.data);
            }
        })}


        storeUser();
            
 
    },[])
    
    
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