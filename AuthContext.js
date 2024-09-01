import React, { createContext, useState, useEffect } from 'react';
import authService from '../services/authService';

// Create a context with 'null' as the default value
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Check if there is a user stored in localStorage when the app loads
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    const login = async (username, password) => {
        try {
            const loggedInUser = await authService.login(username, password);
            setUser(loggedInUser);
        } catch (error) {
            console.error("Failed to login", error);
            throw error; // Re-throw to handle it in the login component if needed
        }
    };

    const logout = () => {
        authService.logout();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
