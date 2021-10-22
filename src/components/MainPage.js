import React, { Component } from 'react';
import CurrencyPairService from './../services/currency-pair.service';
import LiveStockBox from './LiveStockBox';

const tmp = {
   employeeId: “2003,
   designation: “Developer”,
   experience: “3 year”
};

class MainPage extends Component {
  state = {
    currencyList: []
  };

  componentDidMount() {
    const currencyPairObj = new CurrencyPairService();
    currencyPairObj.fetchCurrencyPairs(data => {
      this.setState({ currencyList: data });
    });
  }

  render() {
    const { currencyList } = this.state;
    const renderBoxes = [0, 1, 2, 3];

    return (
      <div className="wrapper-box">
      {
          currencyList.length > 0
          && renderBoxes.map(item => {
            return (
              <LiveStockBox
                key={item}
                initialNum={item}
                currencyList={currencyList}/>
            );
          })
      }
      </div>
    );
  }
}

export default MainPage;
