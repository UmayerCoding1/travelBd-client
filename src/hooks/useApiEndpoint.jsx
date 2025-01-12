import axios from 'axios';
import React from 'react';

const apiEndpoint = axios.create({
    // baseURL:"http://localhost:5000/api",
    baseURL: "https://travelbd-1v4g.onrender.com/api",
    withCredentials: true
})
const UseApiEndpoint = () => {
    return apiEndpoint;
};

export default UseApiEndpoint;