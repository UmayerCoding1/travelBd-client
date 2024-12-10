import axios from 'axios';
import React from 'react';

const axiosPublic = axios.create({
    baseURL:"http://localhost:5000/api",
    withCredentials: true
})
const UseAxiosPublic = () => {
    return axiosPublic;
};

export default UseAxiosPublic;