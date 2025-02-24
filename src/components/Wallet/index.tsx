import Info from './Info';
import useLogic from './logic';

const Wallet = () => {
    const { connectWallet, walletConnected } = useLogic();

    const renderWallet = () => {
        if (!walletConnected) {
            return (
                <div className="flex flex-col gap-4">
                    <div>No wallet is currently connected</div>
                    <button onClick={connectWallet}>Connect</button>
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
