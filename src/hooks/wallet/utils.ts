import { BrowserProvider, Eip1193Provider } from 'ethers';
import { SiweMessage } from 'siwe';

const domain = 'localhost:3000'; // TODO: get from env
const uri = `http://${domain}`; // TODO: get from env
const windowWithProvider = window as typeof window & { ethereum: Eip1193Provider };

const getProvider = () => {
    if (windowWithProvider.ethereum) return new BrowserProvider(windowWithProvider.ethereum);
    return undefined;
};

const getSigner = async () => {
    const provider = getProvider();
    if (!provider) return undefined;

    return provider.getSigner();
};

const getUserAddress = async () => {
    const signer = await getSigner();
    if (!signer) return undefined;
    return signer.getAddress();
};

const createSignInMessage = async () => {
    const signer = await getSigner();
    if (!signer) throw new Error("Can't sign message");

    const userAddress = await getUserAddress();
    const message = new SiweMessage({
        address: userAddress,
        chainId: 1,
        domain,
        statement: 'Sign in with Ethereum',
        uri,
        version: '1',
    });
    const messageToSign = message.prepareMessage();
    return signer.signMessage(messageToSign);
};

export default {
    createSignInMessage,
    getProvider,
    getUserAddress,
};
