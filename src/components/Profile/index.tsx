import { useAuth } from '../../contexts/auth';
import { useWallet } from '../../contexts/wallet';

const Profile = () => {
    const authentication = useAuth();
    const wallet = useWallet();

    const renderProfile = () => {
        if (authentication.loading || wallet.loading) return <div>Loading...</div>;
        if (!wallet.connected)
            return (
                <div className="flex flex-col gap-4">
                    <div>No wallet connected</div>
                    <div>Connect your wallet before you can sign in</div>
                </div>
            );

        if (!authentication.token)
            return (
                <div className="flex flex-col gap-4">
                    <div>Not signed in yet</div>
                    <button onClick={() => {}}>Sign in</button>
                </div>
            );

        return <div>Signed in</div>;
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="text-lg font-bold">Profile</div>
            {renderProfile()}
        </div>
    );
};

export default Profile;
