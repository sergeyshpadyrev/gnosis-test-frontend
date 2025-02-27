import { useAuthenticate } from '../../api';
import { AuthContextType } from './types';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const AuthContext = createContext<AuthContextType>({ loading: true });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const authenticate = useAuthenticate();
    const [loading, setLoading] = useState<boolean>(true);
    const [token, setToken] = useState<string>();

    useEffect(() => {
        const load = async () => {
            setLoading(false);
        };
        load();
    }, []);

    const signIn = useCallback(async (props: { message: string; signature: string }) => {
        setLoading(true);

        try {
            const response = await authenticate.mutateAsync(props);
            const responseJson = await response.json();
            setToken(responseJson.token);
        } finally {
            setLoading(false);
        }
    }, []);

    const value: AuthContextType = useMemo(() => ({ loading, signIn, token }), [loading, token]);
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
