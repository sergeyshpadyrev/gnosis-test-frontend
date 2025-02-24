import hooks from '../../hooks';

const useLogic = () => {
    const { connect, connected, loading } = hooks.wallet.useWalletConnection();
    return { connect, connected, loading };
};

export default useLogic;
