import React, { createContext } from 'react';
import app from '../../config/firebase.config';
import { getAuth } from 'firebase/auth';

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const value = {
        
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;