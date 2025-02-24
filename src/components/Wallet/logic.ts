import hooks from '../../hooks';

const useLogic = () => {
    const { connectWallet, walletConnected } = hooks.wallet.useWalletConnection();
    return { connectWallet, walletConnected };
};

export default useLogic;
