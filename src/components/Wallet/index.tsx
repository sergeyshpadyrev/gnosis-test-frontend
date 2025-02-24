import { useWallet } from '../../wallet';

const Wallet = () => {
    const wallet = useWallet();

    const renderWallet = () => {
        if (wallet.loading) return <div>Loading...</div>;

        if (wallet.connected)
            return (
                <div>
                    <div>Address: {wallet.address}</div>
                    <div>Balance: {wallet.balance} wei</div>
                </div>
            );

        if (wallet.canConnect)
            return (
                <div className="flex flex-col gap-4">
                    <div>No wallet is currently connected</div>
                    <button onClick={wallet.connect}>Connect via browser</button>
                </div>
            );

        return (
            <div className="flex flex-col gap-4">
                <div>You don't have any browser wallet installed</div>
                <div>Please install MetaMask to use this app</div>
            </div>
        );
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="text-lg font-bold">Wallet</div>
            {renderWallet()}
        </div>
    );
};

export default Wallet;
