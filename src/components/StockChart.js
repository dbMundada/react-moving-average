import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
} from 'recharts';

class CustomizedLabel extends PureComponent {
  render() {
    const {
      x, y, stroke, value,
    } = this.props;

    return <text x={x} y={y} dy={-4} fill="#fff" fontSize={9} textAnchor="middle">{value}</text>;
  }
}

class CustomizedAxisTick extends PureComponent {
  render() {
    const {
      x, y, stroke, payload,
    } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={10} y={0} dy={-16} textAnchor="end" fill="#fff" transform="rotate(0)">{payload.value}</text>
      </g>
    );
  }
}

export default class StockChart extends PureComponent {
  generateStockData(stocks) {
    return stocks.map((stock, index) => ({
      tick: `t${index+1}`,
      stock: stock.toFixed(4)
    }));
  }

  render() {
    const { stocks, trend } = this.props;
    const data = this.generateStockData(stocks);
    return (
      <div style={{ width: '100%', height: 170 }}>
        <ResponsiveContainer>
          <LineChart
            className={trend}
            data={data}
            margin={{
              top: 15, right: 10, left: 10, bottom: 0,
            }}>
            <XAxis dataKey="tick"
              tick={<CustomizedAxisTick />}
              fill="#fff" />
            <Line type="step"
              dataKey="stock"
              stroke="#fff"
              fontSize={10}
              label={<CustomizedLabel />} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
