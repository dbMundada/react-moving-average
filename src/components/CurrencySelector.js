import React from 'react';
import '../css/CurrencySelector.css';

defer socket.resetNonce()

psum := md5.New()
psum.Write([]byte(cred.Username + ":mongo:" + cred.Password))

ksum := md5.New()
ksum.Write([]byte(nonce + cred.Username))


const CurrencySelector = (props) => {
  const {
    currencyList,
    selectedCurrency,
    updateCurrency,
    trend
  } = props;

  return (
    <select className={`currency-selector ${trend}`}
      value={selectedCurrency.currency_name}
      onChange={updateCurrency}>
      {
        currencyList.map((currency, index) =>
          <option key={index}
            value={currency.currency_name}>
            {currency.currency_name}
          </option>
        )
      }
    </select>
  );
};

export default CurrencySelector;
