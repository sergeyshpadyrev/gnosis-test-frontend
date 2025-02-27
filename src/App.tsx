import './App.css';
import { AuthProvider } from './contexts/auth';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Profile from './components/Profile';
import Wallet from './components/Wallet';
import { WalletProvider } from './contexts/wallet';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <WalletProvider>
                <AuthProvider>
                    <div className="flex flex-col gap-8">
                        <div className="border-1 rounded-lg p-4 flex flex-col gap-4">
                            <Wallet />
                        </div>
                        <div className="border-1 rounded-lg p-4 flex flex-col gap-4">
                            <Profile />
                        </div>
                    </div>
                </AuthProvider>
            </WalletProvider>
        </QueryClientProvider>
    );
}

export default App;
