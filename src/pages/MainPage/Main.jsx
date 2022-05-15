import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CurrencyBox from '../../components/CurrencyBox';
import "./Main.css";

const myHeaders = new Headers();
myHeaders.append("apikey", "dpTradhjAvXhUFWAywoRFQzVN92Boqae");

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

const BASE_URL = "https://api.apilayer.com/exchangerates_data/latest"

const Main = () => {
  const [currencies, setCurrencies] = useState([])
  const [fromCurr, setFromCurr] = useState();
  const [toCurr, setToCurr] = useState();
  const [rate, setRate] = useState();
  const [amount, setAmount] = useState(1);
  const [fromCurrAmountChanged, setFromCurrAmountChanged] = useState(true);
  const [heading, setHeading] = useState({})

  let toAmount, fromAmount;
  if (fromCurrAmountChanged) {
    fromAmount = amount;
    toAmount = amount * rate;
  } else {
    toAmount = amount;
    fromAmount = amount / rate;
  }


  // useEffect(() => {
  //   fetch(`${BASE_URL}?symbols=&base=UAH`, requestOptions)
  //     .then(res => res.json())
  //     .then(res => {
  //       setCurrencies(Object.keys(res.rates));
  //       setFromCurr(res.base);
  //       const firstCurr = Object.keys(res.rates)[1];
  //       setToCurr(firstCurr);
  //       setRate(res.rates[firstCurr]);
  //       setHeading(res.rates)
  //     })
  // }, []);


  // useEffect(() => {
  //   if (fromCurr !== undefined && toCurr !== undefined) {
  //     fetch(`${BASE_URL}?symbols=${toCurr}&base=${fromCurr}`, requestOptions)
  //       .then(res => res.json())
  //       .then(data => setRate(data.rates[toCurr]));
  //   };
  // }, [fromCurr, toCurr])

  const fromAmountChange = e => {
    setAmount(e.target.value);
    setFromCurrAmountChanged(true);
  }

  const toAmountChange = e => {
    setAmount(e.target.value);
    setFromCurrAmountChanged(false);
  }

  return (
    <div className='container'>
      <div className='heading'>
        <h1>Today's rates</h1>
        <table>
          <tr>
            <th colSpan={2}>1 UAH</th>
          </tr>
          <tr>
            <td>USD</td>
            <td>{heading['USD']}</td>
          </tr>
          <tr>
            <td>EUR</td>
            <td>{heading['EUR']}</td>
          </tr>
        </table>
      </div>
      <CurrencyBox
        currencies={currencies}
        selectedCurr={fromCurr}
        onChangeCurr={e => setFromCurr(e.target.value)}
        amount={fromAmount}
        onChangeAmount={fromAmountChange}
      />
      <hr />
      <CurrencyBox
        currencies={currencies}
        selectedCurr={toCurr}
        onChangeCurr={e => setToCurr(e.target.value)}
        amount={toAmount}
        onChangeAmount={toAmountChange}
      />
      <p>2022 Elvin Mammadli</p>
    </div>
  )
}

export default Main