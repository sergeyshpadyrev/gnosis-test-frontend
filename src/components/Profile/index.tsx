import useLogic from './logic';

const Profile = () => {
    const { authenticated, walletConnected } = useLogic();
    if (!walletConnected) return <div>No wallet connected. Connect your wallet before sign in</div>;

    if (!authenticated) return <div>No authenticated. Sign in to continue</div>;

    return <div>Profile</div>;
};

export default Profile;
