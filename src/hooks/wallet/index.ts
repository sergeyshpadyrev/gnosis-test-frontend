import { useCallback, useEffect, useState } from 'react';
import utils from './utils';

const useWalletAddress = () => {
    const [address, setAddress] = useState<string>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadAddress = async () => {
            const address = await utils.getUserAddress();
            setAddress(address);
            setLoading(false);
        };
        loadAddress();
    }, []);

    return { address, addressLoading: loading };
};

const useWalletBalance = (address: string) => {
    const [balance, setBalance] = useState<bigint | undefined>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadBalance = async () => {
            const provider = utils.getProvider();
            const balance = await provider?.getBalance(address);
            setBalance(balance);
            setLoading(false);
        };
        loadBalance();
    }, []);

    return { balance, balanceLoading: loading };
};

const useWalletConnection = () => {
    const provider = utils.getProvider();

    const connectWallet = useCallback(() => {}, []);
    return { connectWallet, walletConnected: !!provider };
};

const useWalletSignIn = () => {
    const { createSignInMessage } = utils;
    return { createSignInMessage };
};

export default { useWalletAddress, useWalletBalance, useWalletConnection, useWalletSignIn };
