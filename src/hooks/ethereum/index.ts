import { useEffect, useState } from 'react';
import utils from './utils';

const useSignIn = () => {
    const { createSignInMessage } = utils;
    return { createSignInMessage };
};

const useWalletAddress = () => {
    const [address, setAddress] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadUserAddress = async () => {
            const address = await utils.getUserAddress();
            setAddress(address);
            setLoading(false);
        };
        loadUserAddress();
    }, []);

    return { address, addressLoading: loading };
};

export default { useSignIn, useWalletAddress };
