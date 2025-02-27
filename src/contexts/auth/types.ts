export type AuthContextType =
    | { loading: true }
    | { loading: false; signIn: (props: { message: string; signature: string }) => Promise<void>; token?: string };
