import React, { useContext, useEffect, useState } from 'react';
import './Coin.css';
import { useParams } from 'react-router-dom';
import { CoinContext } from '../../context/CoinContext';


import CoinLineChart from '../../components/LineChart/LineChart';

const Coin = () => {
  const { serviceId } = useParams();
  const [coinData, setCoinData] = useState(null);
  const [chartData, setChartData] = useState([]);   // for historical prices
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { currency } = useContext(CoinContext);

  const fetchCoinData = async () => {
    const baseUrl = `https://api.coingecko.com/api/v3/coins/${serviceId}`;
    
    const options = {
      method: 'GET',
      headers: { 'x-cg-demo-api-key': 'CG-NA3sHgHcUauv5MRS4YSwBBAh' } // your key
      
    };

    setLoading(true);
    setError(null);

    try {
      // 1️⃣ Fetch main coin data
      const detailUrl = `${baseUrl}?localization=false&tickers=false&community_data=false&developer_data=false`;
      const response = await fetch(detailUrl, options);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setCoinData(data);

      
      const chartUrl = `${baseUrl}/market_chart?vs_currency=${currency.name}&days=7`;
      const chartRes = await fetch(chartUrl, options);

      if (chartRes.ok) {
        const chartJson = await chartRes.json();
        
        const formatted = chartJson.prices.map(([timestamp, price]) => {
          const date = new Date(timestamp);
          return {
            time:
              date.getDate().toString().padStart(2, '0') +
              '/' +
              (date.getMonth() + 1).toString().padStart(2, '0'),
            price: Number(price.toFixed(2)),
          };
        });
        setChartData(formatted);
      } else {
        console.warn('Failed to fetch chart data, status:', chartRes.status);
      }

    } catch (error) {
      console.error('Error fetching coin data:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoinData();
    
  }, [serviceId, currency.name]);

  if (loading) {
    return (
      <div className="coin">
        <div className="loading">Loading coin data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="coin">
        <div className="error">Error: {error}</div>
      </div>
    );
  }

  if (!coinData) {
    return (
      <div className="coin">
        <div className="error">No coin data available</div>
      </div>
    );
  }

  return (
    <>
    <div className="coinbox">
      <div className="coin">

        <div className="rotationmsg">Please rotate your phone for proper view</div>
      <div className="coin-name"> 
        {coinData.name}
      </div>

      <div className="coin-image">
        <img src={coinData.image?.large} alt={coinData.name} />
      </div>

      
      {coinData.market_data && (
        <>
          <div className="coin-details-2">
            <div className="coin-details-1">
          <p>
            Current Price ({currency.symbol}):{' '}
            {coinData.market_data.current_price[currency.name]?.toLocaleString()}
          </p>

          <p>
            Market Cap: {currency.symbol}
            {coinData.market_data.market_cap[currency.name]?.toLocaleString()}
          </p>

          <p>
            24h Change:{' '}
            {coinData.market_data.price_change_percentage_24h?.toFixed(2)}%
          </p>

          </div>
          </div>
          
          <div className="coin-chart-box">
          <div className="coin-chart">
            
            <CoinLineChart
              data={chartData}
              title={`${coinData.name} Price (Last 7 Days)`}
              currency={currency}
            />
          </div>
          </div>
        </>
      )}
    </div>
    </div>
    
    </>
  );
};

export default Coin;
