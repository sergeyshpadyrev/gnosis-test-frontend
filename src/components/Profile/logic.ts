import hooks from '../../hooks';

const useLogic = () => {
    const { authenticated } = hooks.auth.useAuth();
    const wallet = hooks.wallet.useWallet();
    return { authenticated, wallet };
};

export default useLogic;
