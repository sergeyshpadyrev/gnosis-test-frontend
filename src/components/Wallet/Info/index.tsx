import Balance from './Balance';
import useLogic from './logic';

const WalletInfo = () => {
    const { address, addressLoading } = useLogic();
    if (!address || addressLoading) return <div className="text-gray-500">Loading...</div>;

    return (
        <div>
            <div>Address: {address}</div>
            <Balance address={address} />
        </div>
    );
};

export default WalletInfo;
