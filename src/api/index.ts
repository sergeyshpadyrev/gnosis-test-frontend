import { useMutation, useQuery } from '@tanstack/react-query';
import { useAuth } from '../contexts/auth';

const baseUrl = 'http://localhost:3000'; // TODO: get from env

export const useProfileAPI = () => {
    const auth = useAuth();
    const headers = {
        Authorization: `Bearer ${auth.token}`,
        'Content-Type': 'application/json',
    };

    const read = useQuery({
        queryKey: ['profile'],
        queryFn: async () => {
            const response = await fetch(`${baseUrl}/profile`, { headers, method: 'GET' });
            return response.json();
        },
    });

    const update = useMutation({
        mutationFn: (props: { bio: string; name: string }) =>
            fetch(`${baseUrl}/profile`, {
                body: JSON.stringify(props),
                headers,
                method: 'PUT',
            }),
    });

    return { read, update };
};
