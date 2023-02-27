import { useReducer } from "react";

import "./Converter.scss";
import convert from "../../Images/convert.png";
import axios from "axios";

const convertReducer = (state, action) => {
  switch (action.type) {
    case "EDIT_AMOUNT":
      return {
        ...state,
        amount: action.payload,
      };
    case "SET_TOTAL":
      return {
        ...state,
        total: action.payload,
      };
    case "SET_TO":
      return {
        ...state,
        to: action.payload,
      };
    case "SET_FROM":
      return {
        ...state,
        from: action.payload,
      };
    case "SET_FROM_TO":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
const Converter = () => {
  const initialConvertData = {
    from: "xxx",
    to: "yyy",
    fromCurrency: "",
    toCurrency: "",
    amount: "",
    total: "",
  };
  const [converState, dispatch] = useReducer(
    convertReducer,
    initialConvertData
  );
  const optionsForRequest = {
    method: "GET",
    url: "https://currency-converter5.p.rapidapi.com/currency/convert",
    params: { format: "json", from: "AUD", to: "CAD", amount: "1" },
    headers: {
      "X-RapidAPI-Key": "f92ae9f446mshaaa13807243e680p1ecadfjsn3929c898300f",
      "X-RapidAPI-Host": "currency-converter5.p.rapidapi.com",
    },
  };

  const options = ["", "AMD", "USD", "EUR", "JPY"];

  const handleAmountEdit = (evt) => {
    let newAmount;
    if (Number(evt.target.value) || evt.target.value === "") {
      newAmount = evt.target.value;
      }else if(evt.target.value === "." ){
        newAmount = `${evt.terget.value}0`
      }
      dispatch({ type: "EDIT_AMOUNT", payload: newAmount });
    }
    const handleConvert = (evt) => {
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(converState.amount * 10);
        }, 500);
      }).then((total) => {
        dispatch({ type: "SET_TOTAL", payload: total });
      });
    };
    const handleToChange = (evt) => {
      console.log(evt.target.value);
      dispatch({ type: "SET_TO", payload: evt.target.value });
    };
    const handleFromChange = (evt) => {
      dispatch({ type: "SET_FROM", payload: evt.target.value });
    };
    const handleConvertValueChange = () => {
      dispatch({
        type: "SET_FROM_TO",
        payload: { to: converState.from, from: converState.to },
      });
    };
    return (
      <div className="convert-container global-container">
        <h1 className="page-heading convert">Converter</h1>
        <div className="converter-container">
          <div className="converter-top">
            <div className="amount">
              <span>Amount</span>
              <input
                type="text"
                value={converState.amount}
                onChange={handleAmountEdit}
                onKeyPress={(e) => {
                  e.key === "Enter" && handleConvert();
                }}
              />
              {/* needing validate */}
            </div>
            <div className="from">
              <span>From</span>
              <select name="" id="" onChange={handleFromChange}>
                {options.map((option, i) => (
                  <option
                    key={i}
                    selected={converState.from === option}
                    name={option}
                    disabled={converState.to == option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <img
              src={convert}
              className="chanage-currency-icon"
              alt=""
              onClick={handleConvertValueChange}
            />
            <div className="to">
              <span>To</span>
              <select name="" id="" onChange={handleToChange}>
                {options.map((option, i) => (
                  <option
                    key={i}
                    selected={converState.to === option}
                    name={option}
                    disabled={converState.from == option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button className="convert-button" onClick={handleConvert}>
            Convert
          </button>
          <input
            value={converState.total}
            type="text"
            className="total-input"
            placeholder="Total"
          />
        </div>
      </div>
    );
  };


export default Converter;
