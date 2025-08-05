import {createContext, useContext, useState} from 'react';
import Login from '../components/Login/Login';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        token: localStorage.getItem('token'),
        user: JSON.parse(localStorage.getItem('user')),
    });
   const logout = () => {
       setAuth({
           token: null,
           user: null,
       });
       localStorage.removeItem('token');
       localStorage.removeItem('user');
   };

    return (
        <AuthContext.Provider value={{ ...auth, Login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => {
    return useContext(AuthContext);
};
