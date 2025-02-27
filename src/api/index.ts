import { useMutation } from '@tanstack/react-query';

const baseUrl = 'http://localhost:3000'; // TODO: get from env

export const useAuthenticate = () =>
    useMutation({
        mutationFn: (props: { message: string; signature: string }) =>
            fetch(`${baseUrl}/authenticate`, {
                body: JSON.stringify(props),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST',
            }),
    });
