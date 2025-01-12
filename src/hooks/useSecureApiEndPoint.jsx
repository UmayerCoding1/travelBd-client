import axios from 'axios';
import React from 'react';


const axiosSecure = axios.create({
    // baseURL: "http://localhost:5000/api",
    baseURL: "https://travelbd-server-vgxf.onrender.com/api",
    withCredentials: true
})
const useSecureApiEndPoint = () => {
   
    axiosSecure.interceptors.request.use(function(config) {
        const accessToken = localStorage.getItem('accessToken');
           
        config.headers.Authorization = `Bearer ${accessToken}`;
        return config;
    })

    return axiosSecure;
};

export default useSecureApiEndPoint;