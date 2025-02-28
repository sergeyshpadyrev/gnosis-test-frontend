export type AuthContextType =
    | { loading: true }
    | {
          loading: false;
          signIn: (props: { message: string; signature: string }) => Promise<void>;
          signOut: () => void;
          token?: string;
      };
