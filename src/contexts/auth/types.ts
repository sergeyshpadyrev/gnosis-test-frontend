export type AuthContextType =
    | { loading: true }
    | { loading: false; signIn: (signature: string) => Promise<void>; token?: string };
