import { AuthContextType } from './types';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const AuthContext = createContext<AuthContextType>({} as any);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [token, setToken] = useState<string>();

    useEffect(() => {
        const load = async () => {
            const token = localStorage.getItem('token');
            if (token) setToken(token);
        };
        load();
    }, []);

    const signIn = useCallback(async (auth: { message: string; signature: string }) => {
        const authString = JSON.stringify(auth);
        const authStringBase64 = btoa(authString);

        setToken(authStringBase64);
        localStorage.setItem('token', authStringBase64);
    }, []);

    const signOut = useCallback(() => {
        setToken(undefined);
        localStorage.removeItem('token');
    }, []);

    const value: AuthContextType = useMemo(() => ({ signIn, signOut, token }), [token]);
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
