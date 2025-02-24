import hooks from '../../hooks';
import { useWallet } from '../../contexts/wallet';

const useLogic = () => {
    const { authenticated } = hooks.auth.useAuth();
    const wallet = useWallet();
    return { authenticated, wallet };
};

export default useLogic;
