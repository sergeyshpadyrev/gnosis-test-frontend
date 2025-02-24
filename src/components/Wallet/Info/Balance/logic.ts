import hooks from '../../../../hooks';
import { Props } from './types';

const useLogic = (props: Props) => {
    const { balance, balanceLoading } = hooks.wallet.useWalletBalance(props.address);
    return { balance, balanceLoading };
};

export default useLogic;
