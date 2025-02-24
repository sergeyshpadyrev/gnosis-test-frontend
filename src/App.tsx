import './App.css';
import { useWalletAddress } from './hooks/ethereum';

function App() {
    const { address, addressLoading } = useWalletAddress();
    if (addressLoading) return <div>Loading...</div>;

    const connectTitle = address ? `Connect with ${address}` : 'Connect';
    return (
        <div>
            <div>{connectTitle}</div>
        </div>
    );
}

export default App;
