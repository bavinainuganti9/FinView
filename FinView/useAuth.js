import { useContext, useEffect } from 'react';
import AuthContext from '../context/AuthContext';
import authService from '../services/authService';

const useAuth = () => {
    const { user, setUser } = useContext(AuthContext);

    useEffect(() => {
        const checkToken = async () => {
            try {
                const refreshedUser = await authService.refreshToken();
                setUser(refreshedUser);
            } catch (error) {
                console.log('Failed to refresh token', error);
            }
        };

        if (user && user.accessToken) {
            checkToken();
        }
    }, [user, setUser]);

    return user;
};

export default useAuth;
