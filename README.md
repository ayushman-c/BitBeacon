

---

# 📈 Crypto Price Tracker

A modern and responsive **cryptocurrency price tracking application** built with **React.js**, **CoinGecko API**, and **Recharts**.
This project allows users to browse different cryptocurrencies, view detailed stats, and visualize price trends using clean and interactive charts.

---

## 🚀 Features

* 🔍 **Live Crypto Data** — real-time price updates from CoinGecko
* 📊 **Interactive Line Charts** using Recharts
* ⚛️ **Modern React Architecture** (Hooks, Context API, modular components)
* 🎨 **Responsive & Clean UI** with a crypto-themed dark design
* 🌐 **Multi-currency Support** (USD, INR, etc.)
* 🔎 **Detailed Coin Page** with market cap, 24h change, and historical trends

---

## 🧩 Tech Stack

| Technology        | Purpose                 |
| ----------------- | ----------------------- |
| **React.js**      | Frontend UI framework   |
| **Recharts**      | Data visualization      |
| **CoinGecko API** | Crypto market data      |
| **React Router**  | Page routing            |
| **Context API**   | Global state management |
| **CSS**           | Styling and layout      |

---

## 📦 Installation & Setup

Clone the repository:

```bash
git clone https://github.com/your-username/crypto-tracker.git
cd crypto-tracker
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the app in your browser:

```
http://localhost:5173/
```

---

## 🔑 API Key Setup

This project uses **CoinGecko’s API (v3)**.
Create a `.env` file in the project root:

```
VITE_COINGECKO_API_KEY=your_api_key_here
```

Access it inside React using:

```js
import.meta.env.VITE_COINGECKO_API_KEY
```

---

## 🗂️ Project Structure

```
src/
├── components/
│   ├── LineChart.jsx
│   └── Navbar.jsx
├── context/
│   └── CoinContext.jsx
├── pages/
│   ├── Home.jsx
│   ├── Coin.jsx
│   └── Services.jsx
├── assets/
├── App.jsx
└── main.jsx
```

---

## 📈 How It Works

1. User selects a cryptocurrency.
2. App fetches real-time data + historical prices from CoinGecko.
3. Price, market cap, 24h change, and other data are displayed.
4. Historical price points are passed to **Recharts**.
5. A clean, responsive **LineChart** visualizes the price movement.

---

## 🌐 API Endpoints Used

### 🪙 Coin Details

```
GET /api/v3/coins/{id}
```

### 📉 Historical Data (Chart)

```
GET /api/v3/coins/{id}/market_chart?vs_currency=usd&days=7
```

---

## 🛠️ Future Enhancements

* ⏱ Live price updates (WebSockets)
* 🌓 Light/Dark mode toggle
* ⭐ Watchlist / Favorites
* 🎛 Chart filters: 1D, 7D, 30D, 1Y
* 📱 Improved mobile UI

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a new branch
3. Make your changes
4. Submit a pull request

---

## 📜 License

This project is licensed under the **MIT License**.

---

## ⭐ Support

If you find this project useful, please consider giving it a **star** ⭐ on GitHub.
Your support motivates further improvements!

---
