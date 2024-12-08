import React, { createContext, useEffect, useState } from 'react';


export const SkeletonContext = createContext(null);
const LoadingContext = ({children}) => {
    const [skeletonLoading,setSkeletonLoading]= useState(true);


    useEffect(() => {
        setTimeout(() => {
            setSkeletonLoading(false)
        },2000)

        // setSkeletonLoading(false)
    },[])

    const contextValue = {
        skeletonLoading,
        setSkeletonLoading
    }
    return <SkeletonContext.Provider value={contextValue}>
        {children}
    </SkeletonContext.Provider>
};

export default LoadingContext;