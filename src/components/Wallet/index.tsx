import Info from './Info';
import useLogic from './logic';

const Wallet = () => {
    const { connect, connected, loading } = useLogic();

    const renderWallet = () => {
        if (loading) return <div>Loading...</div>;
        if (!connected) {
            return (
                <div className="flex flex-col gap-4">
                    <div>No wallet is currently connected</div>
                    <button onClick={connect}>Connect</button>
                </div>
            );
        }

        return <Info />;
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="text-lg font-bold">Wallet</div>
            {renderWallet()}
        </div>
    );
};

export default Wallet;
