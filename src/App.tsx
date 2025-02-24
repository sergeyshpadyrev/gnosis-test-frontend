import './App.css';
import Profile from './components/Profile';
import Wallet from './components/Wallet';

function App() {
    return (
        <div className="flex flex-col gap-4">
            <div className="border-1 rounded-lg p-4 flex flex-col gap-4">
                <Wallet />
            </div>
            <div className="border-1 rounded-lg p-4 flex flex-col gap-4">
                <Profile />
            </div>
        </div>
    );
}

export default App;
