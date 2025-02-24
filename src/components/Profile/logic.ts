import hooks from '../../hooks';

const useLogic = () => {
    const { authenticated } = hooks.auth.useAuth();
    const { walletConnected } = hooks.wallet.useWalletConnection();
    return { authenticated, walletConnected };
};

export default useLogic;
