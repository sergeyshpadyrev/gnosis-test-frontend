import { useProfileAPI } from '../../../api';

const Profile = () => {
    const profileAPI = useProfileAPI();

    if (profileAPI.read.isLoading) return <div>Loading...</div>;

    return (
        <div className="flex flex-col gap-4">
            <div>Name: {profileAPI.read.data?.name}</div>
            <div>Bio: {profileAPI.read.data?.bio}</div>
        </div>
    );
};

export default Profile;
