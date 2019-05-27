import React from 'react';

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
