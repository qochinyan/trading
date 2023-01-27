import axios from "axios";
import { useEffect, useState } from "react";

import "./Home.scss";
const Main = () => {
  const [currencies, setCurrencies] = useState({
    btc: "",
    sol: "",
    eth: "",
    ada: "",
  });
  useEffect(() => {
    axios
      .get("https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT")
      .then((data) =>
        setCurrencies((d) => {
          return { ...d, btc: Number(data.data.price).toFixed() };
        })
      );

    axios
      .get("https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT")
      .then((data) =>
        setCurrencies((d) => {
          return { ...d, eth: Number(data.data.price).toFixed(1) };
        })
      );

    axios
      .get("https://api.binance.com/api/v3/ticker/price?symbol=SOLUSDT")
      .then((data) =>
        setCurrencies((d) => {
          return { ...d, sol: Number(data.data.price).toFixed(2) };
        })
      );

    axios
      .get("https://api.binance.com/api/v3/ticker/price?symbol=ADAUSDT")
      .then((data) =>
        setCurrencies((d) => {
          return { ...d, ada: Number(data.data.price).toFixed(4) };
        })
      );
  });
  return (
    <div className="home-container global-container">
      <h1 className="page-heading home">Home Page</h1>
      <table className="currencies-table">
        <tr>
          <th>Currency</th>
          <th>
            Price (<span style={{ color: "lime" }}>$</span>)
          </th>
          <th>From</th>
          <th>Link</th>
        </tr>
        <tr>
          <td>BTC/USDT</td>
          <td>{currencies.btc}</td>
          <td>Binance</td>
          <a target="blank" href="https://www.binance.com/en/trade/BTC_USDT">
            <td>See More</td>{" "}
          </a>
        </tr>
        <tr>
          <td>ETH/USDT</td>
          <td>{currencies.eth}</td>
          <td>Binance</td>
          <a target="blank" href="https://www.binance.com/en/trade/BTC_USDT">
            <td>See More</td>{" "}
          </a>
        </tr>
        <tr>
          <td>SOL/USDT</td>
          <td>{currencies.sol}</td>
          <td>Binance</td>
          <a target="blank" href="https://www.binance.com/en/trade/BTC_USDT">
            <td>See More</td>{" "}
          </a>
        </tr>
        <tr>
          <td>ADA/USDT</td>
          <td>{currencies.ada}</td>
          <td>Binance</td>
          <a target="blank" href="https://www.binance.com/en/trade/BTC_USDT">
            <td>See More</td>{" "}
          </a>
        </tr>
      </table>
    </div>
  );
};

export default Main;
