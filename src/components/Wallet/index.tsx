import hooks from '../../hooks';

const Wallet = () => {
    const wallet = hooks.wallet.useWallet();

    const renderWallet = () => {
        if (wallet.loading) return <div>Loading...</div>;
        if (!wallet.connected) {
            return (
                <div className="flex flex-col gap-4">
                    <div>No wallet is currently connected</div>
                    <button onClick={wallet.connect}>Connect</button>
                </div>
            );
        }

        return (
            <div>
                <div>Address: {wallet.address}</div>
                <div>Balance: {wallet.balance} wei</div>
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
