import { BrowserProvider, Eip1193Provider } from 'ethers';
import { useCallback, useEffect, useState } from 'react';

export const loadProvider = async (): Promise<BrowserProvider | null> => {
    const windowWithProvider = window as typeof window & { ethereum: Eip1193Provider };
    if (!windowWithProvider.ethereum) return null;
    return new BrowserProvider(windowWithProvider.ethereum);
};

const useWallet = () => {
    const [address, setAddress] = useState<string>();
    const [balance, setBalance] = useState<bigint>();
    const [connected, setConnected] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    const load = useCallback(async () => {
        const provider = await loadProvider();
        if (!provider) {
            setLoading(false);
            return;
        }

        const accounts = await provider.listAccounts();
        const connected = accounts.length > 0;
        setConnected(connected);

        if (connected) {
            const signer = await provider.getSigner();
            setAddress(signer.address);

            const balance = await provider?.getBalance(signer.address);
            setBalance(balance);
        }

        setLoading(false);
    }, []);

    useEffect(() => {
        load();
    }, []);

    const connect = useCallback(async () => {
        setLoading(true);

        const provider = await loadProvider();
        if (!provider) {
            alert('No browser wallet found');
            return;
        }

        await provider.getSigner();
        load();
    }, []);
    return { address, balance, connected, connect, loading };
};

export default { useWallet };
