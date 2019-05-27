import React from 'react';

const MovingAverageLabel = (props) => {
  const { average } = props;
  const splitInteger = average.toFixed(4).split('.');
  const splitFraction = [splitInteger[1].substr(0, 2), splitInteger[1].substr(2, 2)];

  return (
    <span className="average align-left">
      <span className="big">{splitInteger[0]}</span>.
      {splitFraction[0]}
      <span className="big">{splitFraction[1]}</span>
    </span>
  );
};

export default MovingAverageLabel;
