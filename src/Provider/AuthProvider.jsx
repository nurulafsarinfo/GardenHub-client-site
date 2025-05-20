import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../firebase.init';

const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    // User Sign up method
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // User sign in method 
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userInfo = {
        user,
        loading,
        setUser,
        setLoading,
        createUser,
        loginUser,
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;