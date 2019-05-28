import React, { Component } from 'react';
import WebSocketService from './../services/web-socket.service';
import StockChart from './StockChart';
import TickCounter from './TickCounter';
import CurrencySelector from './CurrencySelector';
import MovingAverageLabel from './MovingAverageLabel';
import '../css/LiveStockBox.css';

class LiveStockBox extends Component {
  constructor() {
    super();
    this.wsInstance = null;
    this.state = {
      currencyList: [],
      numTicks: 10,
      stocks: [],
      changePercentage: 0,
      trend: 'red',
      average: 0,
      selectedCurrency: {}
    };
  }

  getTrend = (percentage) => {
    // red darkred lightgreen darkgreen
    if (percentage > 5) {
      return 'darkred';
    } else if (percentage > 0) {
      return 'red';
    } else if (percentage > -5) {
      return 'lightgreen'
    }
    return 'darkgreen';
  }

  onNewMsgReceived = (event) => {
    const latestStockPrice = event && event.data;

    if (latestStockPrice) {
        const { stocks, numTicks, average } = this.state;
        const changePercentage = ((latestStockPrice - average) / average) * 100;

        if (stocks.length >= numTicks) {
          stocks.splice(0, stocks.length - numTicks + 1);
        }
        stocks.push(parseFloat(latestStockPrice, 10));

        const newAverage = stocks.reduce((prev, curr) => prev + curr, 0) / stocks.length;
        const trend = this.getTrend(changePercentage);

        this.setState({
          stocks,
          average: newAverage,
          changePercentage,
          trend
        });
    }
  }

  componentDidMount() {
    const { initialNum, currencyList } = this.props;
    console.log(initialNum);

    this.initiateWSInstance(currencyList[initialNum]);
    this.setState({
      currencyList: currencyList,
      selectedCurrency: currencyList[initialNum],
      numTicks: (10 - initialNum)
    });
  }

  initiateWSInstance(currency) {
    this.wsInstance = new WebSocketService(
      currency.currency_name,
      this.onNewMsgReceived
    );
  }

  updateTicks = (numTicks) => {
    this.setState({ numTicks })
  }

  updateCurrency = (event) => {
    const currency = event && event.target && event.target.value;

    if (currency) {
      const selectedCurrency = { currency_name: currency };
      this.setState({ selectedCurrency, stocks: [] });
      this.wsInstance.close();
      this.initiateWSInstance(selectedCurrency);
    }
  }

  render() {
    const {
      stocks,
      currencyList,
      selectedCurrency,
      changePercentage,
      trend,
      average,
      numTicks
    } = this.state;

    return (
      <section className={`live-graph-box ${trend}`}>
        <div className="row">
          <CurrencySelector
            trend={trend}
            currencyList={currencyList}
            selectedCurrency={selectedCurrency}
            updateCurrency={this.updateCurrency}/>
          <span className="changePercentageNum align-right">
            {changePercentage.toFixed(2)}%
          </span>
        </div>
        <div className="row">
          <MovingAverageLabel average={average} />
          <TickCounter
            numTicks={numTicks}
            updateTicks={this.updateTicks} />
        </div>
        <StockChart trend={trend} stocks={stocks}/>
      </section>
    );
  }
}

export default LiveStockBox;
