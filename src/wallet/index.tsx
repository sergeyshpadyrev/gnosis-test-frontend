import { BrowserProvider, Eip1193Provider } from 'ethers';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { WalletContextType } from './types';

const windowWithProvider = window as typeof window & { ethereum: Eip1193Provider };
const provider = windowWithProvider.ethereum ? new BrowserProvider(windowWithProvider.ethereum) : undefined;

const WalletContext = createContext<WalletContextType>({ loading: true });

export const WalletProvider = ({ children }: { children: React.ReactNode }) => {
    const [address, setAddress] = useState<string>();
    const [balance, setBalance] = useState<bigint>();
    const [connected, setConnected] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    const load = useCallback(async () => {
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

        if (!provider) {
            alert('No browser wallet found');
            return;
        }

        await provider.getSigner();
        load();
    }, []);

    const value: WalletContextType = useMemo(
        () => ({ address, balance, canConnect: !!provider, connected, connect, loading }),
        [address, balance, connect, connected, loading],
    );

    return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>;
};

export const useWallet = () => useContext(WalletContext);
