import { useCallback } from 'react';
import hooks from '../../hooks';

const useLogic = () => {
    const { createSignInMessage } = hooks.ethereum.useSignIn();

    const signIn = useCallback(async () => {
        const signInMessage = await createSignInMessage();
        // TODO send it to backend to signin and get JWT token
    }, [createSignInMessage]);

    return { signIn };
};
