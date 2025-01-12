import React from 'react';
import { useQuery } from 'react-query';
import UseApiEndpoint from './useApiEndpoint';
import useAuth from './useAuth';

const useLoggedUserData = () => {
    const {user} = useAuth();
    const apiEndPoint = UseApiEndpoint();

    const {data:loggedUser,refetch:loggedUserRefetch} = useQuery({
        queryKey: ['LoggedUser',user],
        queryFn: async () => {
            const res = await apiEndPoint.get(`/user?email=${user?.email}`);
            return res.data.data;
        }
    })
    return [loggedUser,loggedUserRefetch];
};

export default useLoggedUserData;