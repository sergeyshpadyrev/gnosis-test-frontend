import hooks from '../../../hooks';

const useLogic = () => {
    const { address, addressLoading } = hooks.wallet.useWalletAddress();

    return { address, addressLoading };
};

export default useLogic;
