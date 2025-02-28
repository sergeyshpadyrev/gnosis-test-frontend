export type AuthContextType = {
    signIn: (props: { message: string; signature: string }) => Promise<void>;
    signOut: () => void;
    token?: string;
};
