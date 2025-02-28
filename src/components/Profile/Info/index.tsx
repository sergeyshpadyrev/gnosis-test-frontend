import { useCallback, useEffect, useState } from 'react';
import { useProfileAPI } from '../../../api';

const Info = (props: { signOut: () => void }) => {
    const [editing, setEditing] = useState(false);
    const profileAPI = useProfileAPI();

    const [name, setName] = useState(profileAPI.read.data?.profile?.name);
    const [bio, setBio] = useState(profileAPI.read.data?.profile?.bio);

    useEffect(() => {
        setName(profileAPI.read.data?.profile?.name);
        setBio(profileAPI.read.data?.profile?.bio);
    }, [profileAPI.read.data]);

    const renderEditor = () => (
        <>
            <input
                className="border border-gray-300 rounded-md p-2"
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                value={name}
            />
            <input
                className="border border-gray-300 rounded-md p-2"
                onChange={(e) => setBio(e.target.value)}
                placeholder="Bio"
                value={bio}
            />
        </>
    );
    const renderInfo = () => (
        <>
            <div>Name: {name}</div>
            <div>Bio: {bio}</div>
        </>
    );

    const edit = useCallback(() => {
        setEditing(true);
    }, []);

    const save = useCallback(async () => {
        await profileAPI.update.mutateAsync({ bio, name });
        setEditing(false);
    }, [bio, name]);

    if (profileAPI.read.isLoading) return <div>Loading...</div>;
    return (
        <div className="flex flex-col gap-4">
            {editing ? renderEditor() : renderInfo()}
            <div className="flex flex-row gap-4 justify-center">
                <button onClick={editing ? save : edit}>{editing ? 'Save' : 'Edit'}</button>
                <button onClick={() => props.signOut()}>Logout</button>
            </div>
        </div>
    );
};

export default Info;
