import { createContext, useEffect, useState, useCallback } from "react"

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
    const [allCoin, setAllCoin] = useState([]);
    const [currency, setCurrency] = useState({
        name: "usd",
        symbol: "$" 
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchAllCoin = useCallback(async () => {
        // Remove restrictive parameters to fetch all coins
        const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h,24h,7d`;
        
        const options = {
            method: 'GET',
            headers: {'x-cg-demo-api-key': 'CG-NA3sHgHcUauv5MRS4YSwBBAh'}
        };

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(url, options);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            setAllCoin(data);
        } catch (error) {
            console.error('Error fetching coins:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, [currency.name]);

    useEffect(() => {
        fetchAllCoin();
    }, [fetchAllCoin]);

    const contextValue = {
        allCoin, 
        currency, 
        setCurrency,
        loading,
        error,
        refetch: fetchAllCoin
    };

    return (
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    );
}

export default CoinContextProvider;