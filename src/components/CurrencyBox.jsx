import "./CurrencyBox.css";

const CurrencyBox = (props) => {
  const { currencies, selectedCurr,
    onChangeCurr, amount, onChangeAmount
  } = props;
  return (
    <div className='currency-box'>

      <input className='currency-box__input' type="number"
        value={amount}
        onChange={onChangeAmount} />

      <select className='currency-box__select'
        value={selectedCurr}
        onChange={onChangeCurr}
      >
        {currencies.map(currency => (
          <option key={currency} value={currency}>{currency}</option>
        ))}

      </select>
    </div>
  )
}

export default CurrencyBox