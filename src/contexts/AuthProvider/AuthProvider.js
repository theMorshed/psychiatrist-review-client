import React, { createContext, useState } from 'react';
import app from '../../config/firebase.config';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const value = {
        logIn,
        user,
        setUser
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;