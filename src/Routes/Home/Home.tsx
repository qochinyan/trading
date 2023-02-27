import axios from "axios";
import { useEffect, useState } from "react";

import "./Home.scss";
import img1 from "../../Images/homeimg.png";
import coin from "../../Images/coin.png";
import { useAppDispatch } from "../../Redux/hooks";
import {
  startLoading,
  endLoading,
  setConnection,
} from "../../Redux/features/settings/settingsSlice";
import Loader from "../../Components/Loader/Loader";

const Currencies = [
  { symbol: "BTC", fixing: 2 },
  { symbol: "ETH", fixing: 2 },
  { symbol: "BNB", fixing: 1 },
  { symbol: "SOL", fixing: 2 },
  { symbol: "ADA", fixing: 4 },
] as const;

interface Currency {
  symbol: string;
  price: string;
}

const Main = () => {
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(startLoading());
    axios
      .get(
        `https://api.binance.com/api/v3/ticker/price?symbols=[${[
          Currencies.map((curr) => `"${curr.symbol}USDT"`),
        ]}]`
      )
      .then((data: any) => {
        setCurrencies(data.data);
        dispatch(endLoading())
        dispatch(setConnection({payload:true}))
      });
  }, []);
  useEffect(() => {
    axios
      .get(
        `https://api.binance.com/api/v3/ticker/price?symbols=[${[
          Currencies.map((curr) => `"${curr.symbol}USDT"`),
        ]}]`
      )
      .then((data: any) => {
        setCurrencies(data.data);
        dispatch(setConnection({payload:true}))
      });
  });
  return (
    <>
      {" "}
      <div className="home-container global-container">
        <h1 className="page-heading home">Home</h1>
        {/* <h3 className="curr-table-heading">Currencies</h3> */}
        <div className="home-first-content">
          <div className="first-content-coin-icon">
            <img src={coin} alt="" />
          </div>
          <div className="home-first-content--left">
            <table className="currencies-table">
              <thead>
                <tr>
                  <th>Currency</th>
                  <th>
                    Price (<span className="table-dollar">$</span>)
                  </th>
                  <th>From</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                {Currencies.map((curr, i) => {
                  return (
                    <tr key={i}>
                      <td>{`${curr.symbol}/USDT`}</td>
                      <td className="price-td">
                        {(
                          +currencies.find(
                            (c) => c.symbol === `${curr.symbol}USDT`
                          )?.price || 0
                        ).toFixed(curr.fixing)}
                      </td>
                      <td>Binance</td>
                      <td className="link-td">
                        <a
                          target="_blank"
                          href={`https://www.binance.com/en/trade/${curr.symbol}_USDT`}>
                          See More
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="home-first-content--right">
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
