import React, { useContext, useEffect, useState } from "react";
import "./Services.css";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

function Services() {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [search, setSearch] = useState("");

  // When allCoin changes OR search text changes, update the displayed coins
  useEffect(() => {
    if (!allCoin || allCoin.length === 0) {
      setDisplayCoin([]);
      return;
    }

    const filtered = allCoin.filter((coin) =>
      (coin.name && coin.name.toLowerCase().includes(search.toLowerCase())) ||
      (coin.symbol && coin.symbol.toLowerCase().includes(search.toLowerCase()))
    );

    setDisplayCoin(filtered);
  }, [allCoin, search]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh on submit
  };

  return (
    <>
      <div className="service-heading-box">
      <div className="service-heading">Track the Crypto Market in Real Time</div>
      </div>

      <div className="serv-box">
        <div className="service-desc">
          Stay updated with lightning-fast crypto data, live charts, click on a coin after searching it to learn more about it.
          
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="search-box">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={handleSearchChange}
            />
            <button type="submit">SEARCH</button>
          </div>
        </div>
      </form>

      <div className="crypto-table">
        {/* Header row */}
        <div className="table-layout table-header">
          <p>#</p>
          <p>Coin</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24H Change</p>
          <p className="market-cap">Market Cap</p>
        </div>

        
        {displayCoin.slice(0, 10).map((item) => (
          <Link to={`/services/${item.id}`} className="table-layout" key={item.id}>
            <p>{item.market_cap_rank}</p>

            
            <div className="coin-info">
              <img src={item.image} alt={item.name} className="coin-img" />  
                <p className="coin-name">{item.name}</p>
            </div>

           
            <p>
              {currency.symbol}
              {item.current_price?.toLocaleString()}
            </p>

            {/* 24H change */}
            <p
              style={{
                textAlign: "center",
                color:
                  item.price_change_percentage_24h >= 0 ? "limegreen" : "crimson",
              }}
            >
              {item.price_change_percentage_24h?.toFixed(2)}%
            </p>

            {/* Market Cap */}
            <p className="market-cap">
              {currency.symbol}
              {item.market_cap?.toLocaleString()}
            </p>
          </Link>
        ))}

        {displayCoin.length === 0 && (
          <div className="no-results">No coins found.</div>
        )}
      </div>
    </>
  );
}

export default Services;
