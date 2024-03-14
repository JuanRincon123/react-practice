import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtactedRoutes = ({isLogged}) => {

    {
        if (isLogged) {
            return <Outlet />

        } else {
            return <Navigate to='/login' />;
        }
    }
}

export default ProtactedRoutes
