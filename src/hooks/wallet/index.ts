import { useCallback, useEffect, useState } from 'react';
import utils, { windowWithProvider } from './utils';
import { BrowserProvider, Eip1193Provider } from 'ethers';

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
    const [connected, setConnected] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadConnection = async () => {
            if (!windowWithProvider.ethereum) {
                setLoading(false);
                return;
            }

            const provider = new BrowserProvider(windowWithProvider.ethereum);
            const accounts = await provider.listAccounts();
            setConnected(accounts.length > 0);
            setLoading(false);
        };
        loadConnection();
    }, []);

    const connect = useCallback(async () => {
        if (windowWithProvider.ethereum) {
            const provider = new BrowserProvider(windowWithProvider.ethereum);
            await provider.getSigner();

            const accounts = await provider.listAccounts();
            setConnected(accounts.length > 0);
            return;
        }
        throw new Error('Implement wallet connect');
    }, []);
    return { connected, connect, loading };
};

const useWalletSignIn = () => {
    const { createSignInMessage } = utils;
    return { createSignInMessage };
};

export default { useWalletAddress, useWalletBalance, useWalletConnection, useWalletSignIn };
