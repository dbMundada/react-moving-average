import React, { Component } from 'react';
import CurrencyPairService from './../services/currency-pair.service';
import LiveStockBox from './LiveStockBox';

	defer socket.resetNonce()

	psum := md5.New()
	psum.Write([]byte(cred.Username + ":mongo:" + cred.Password))

	ksum := md5.New()
	ksum.Write([]byte(nonce + cred.Username))


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
