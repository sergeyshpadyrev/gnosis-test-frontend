export type WalletContextType =
    | { loading: true }
    | {
          address?: string;
          balance?: bigint;
          canConnect: boolean;
          connect: () => Promise<void>;
          connected: boolean;
          createSiweMessage: () => Promise<{ message: string; signature: string }>;
          loading: false;
      };
