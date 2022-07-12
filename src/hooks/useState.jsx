import React, { useState } from 'react';
import './style.css';

const UseState = () => {
  const [myNum, setMyNum] = useState(0);

  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div class="button2" onClick={() => setMyNum(myNum + 1)}> 
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {/* number increment */}
          INCR
        </div>
        {/* ternary operator used => if myNum ki value greater than 0 hai, tho decrement karo vrna 0 karo  */}
        <div class="button2" onClick={() => (myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0))}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {/* number decrement */}
          DECR
        </div>
      </div>
    </>
  );
};

export default UseState;
