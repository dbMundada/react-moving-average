import React from 'react';

const TickCounter = (props) => {
  const { numTicks, updateTicks } = props;

  return (
    <span className="num-tick-box align-right">
      <strong>No. of Ticks</strong><br />
      <span className="tick-number">
        <span onClick={() => updateTicks(numTicks - 1)}
          className="tick-adjuster"> - </span>
          {numTicks}
        <span onClick={() => updateTicks(numTicks + 1)}
          className="tick-adjuster"> + </span>
      </span>
    </span>
  );
};

export default TickCounter;
