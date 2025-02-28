import Info from './Info';
import { useCallback } from 'react';
import { useAuth } from '../../contexts/auth';
import { useWallet } from '../../contexts/wallet';

const Profile = () => {
    const authentication = useAuth();
    const wallet = useWallet();

    const signIn = useCallback(async () => {
        if (wallet.loading) return;

        const { message, signature } = await wallet.createSiweMessage();
        await authentication.signIn({ message, signature });
    }, [authentication, wallet]);

    const renderProfile = () => {
        if (wallet.loading) return <div>Loading...</div>;
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
                    <button onClick={signIn}>Sign in</button>
                </div>
            );

        return <Info signOut={authentication.signOut} />;
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="text-lg font-bold">Profile</div>
            {renderProfile()}
        </div>
    );
};

export default Profile;
