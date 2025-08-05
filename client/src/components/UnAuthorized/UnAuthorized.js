
import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
const AuthContext = () => {
    const { user } = useAuth();
    if (!user) {
        return <Navigate to="/login" />;
    }
    return (
        <div>AuthContext</div>
    )
}

export default AuthContext;