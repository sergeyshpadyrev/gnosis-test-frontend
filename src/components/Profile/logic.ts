import { useCallback } from 'react';
import { useAuth } from '../../contexts/auth';
import { useWallet } from '../../contexts/wallet';

const useLogic = () => {
    const authentication = useAuth();
    const wallet = useWallet();

    const signIn = useCallback(async () => {
        if (authentication.loading || wallet.loading) return;

        const signature = await wallet.createSignature();
        await authentication.signIn(signature);
    }, [authentication, wallet]);

    return { authentication, signIn, wallet };
};

export default useLogic;
