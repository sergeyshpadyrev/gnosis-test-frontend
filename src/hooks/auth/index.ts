const authToken = undefined;

const useAuth = () => {
    return { authenticated: !!authToken };
};

export default { useAuth };
