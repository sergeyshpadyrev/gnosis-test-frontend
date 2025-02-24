import { AuthContextType } from './types';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const AuthContext = createContext<AuthContextType>({ loading: true });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [token, setToken] = useState<string>();

    useEffect(() => {
        const load = async () => {
            setLoading(false);
        };
        load();
    }, []);

    const signIn = useCallback(async (message: string) => {
        setLoading(true);
    }, []);

    const value: AuthContextType = useMemo(() => ({ loading, token }), [loading, token]);
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
