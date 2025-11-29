// LineChart.jsx
import React from 'react';
import {
  LineChart as ReLineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

// data: [ { time: "dd/mm", price: 12345.67 }, ... ]
const CoinLineChart = ({ data, title = 'Price Chart', currency }) => {
  if (!data || data.length === 0) {
    return <p>No chart data available.</p>;
  }

  const formatPrice = (value) => {
    if (!currency) return value;
    return `${currency.symbol}${value.toLocaleString()}`;
  };

  return (
    <div style={{ width: '100%', height: 350 }}>
      <h2 style={{ marginBottom: '0.5rem' }}>{title}</h2>
      <ResponsiveContainer width="100%" height="100%">
        <ReLineChart
          data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis
            dataKey="price"
            domain={['auto', 'auto']}
            tickFormatter={formatPrice}
          />
          <Tooltip
            formatter={(value) => [formatPrice(value), 'Price']}
            labelFormatter={(label) => `Date: ${label}`}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#F2A900"    // BTC-ish yellow, change if you want
            strokeWidth={2}
            dot={false}
          />
        </ReLineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CoinLineChart;
