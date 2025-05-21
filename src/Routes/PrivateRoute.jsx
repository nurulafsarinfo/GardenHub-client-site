import React, { Children, use } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user , loading} = use(AuthContext);

    if(loading) {
        return <Loader></Loader>
    }
    if(user && user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;