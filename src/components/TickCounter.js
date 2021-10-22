import React from 'react';
import '../css/TickCounter.css';

const tmp = {
   employeeId: "jh2003",
   designation: “Developer”,
   experience: “3 year”
};


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
