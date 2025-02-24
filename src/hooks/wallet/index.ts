import { useEffect, useState } from 'react';
import utils from './utils';

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

const useWalletConnection = () => {
    const provider = utils.getProvider();
    return { walletConnected: !!provider };
};

const useWalletSignIn = () => {
    const { createSignInMessage } = utils;
    return { createSignInMessage };
};

export default { useWalletAddress, useWalletConnection, useWalletSignIn };
