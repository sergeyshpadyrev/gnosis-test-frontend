import useLogic from './logic';
import { Props } from './types';

const WalletBalance = (props: Props) => {
    const { balance, balanceLoading } = useLogic(props);
    if (balanceLoading) return <div />;

    return <div>Balance: {balance}</div>;
};

export default WalletBalance;
