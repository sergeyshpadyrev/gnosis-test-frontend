import useLogic from './logic';

const Profile = () => {
    const { authenticated, walletConnected } = useLogic();

    const renderProfile = () => {
        if (!walletConnected)
            return (
                <div className="flex flex-col gap-4">
                    <div>No wallet connected</div>
                    <div>Connect your wallet before you can sign in</div>
                </div>
            );

        if (!authenticated)
            return (
                <div className="flex flex-col gap-4">
                    <div>Not signed in yet</div>
                    <button onClick={() => {}}>Sign in</button>
                </div>
            );

        return <div>...</div>;
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="text-lg font-bold">Profile</div>
            {renderProfile()}
        </div>
    );
};

export default Profile;
