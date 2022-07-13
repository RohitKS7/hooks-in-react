import React, { useState, useReducer } from 'react';
import './style.css';

// UseReducer hook -> this hook works same like useState but best for complex projects

// useReducer also returns 2 objects in a array same as useState but useReducer takes 2 arguments
// state and initialdata works same like useState hook -> initialdata = initialData and state = currentData
// but dispatch is not used to update the state, instead it used to trigger the "reducer" function
// and that reducer funciton will be the one who update the state of data.

// Reducer funciton -> it also takes 2 parameters -> currentData and action
const reducer = (state, action) => {
  if (action.type === 'INCR') {
    state = state + 1;
  }
  if (state > 0 && action.type === 'DECR') {
    state = state - 1;
  }
  return state;
};

const UseReducer = () => {
  const initialData = 10;
  // useReducer hook
  const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        {/* dispatch is used in onClick funciton */}
        <div className="button2" onClick={() => dispatch({ type: 'INCR' })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {/* number increment */}
          INCR
        </div>
        <div className="button2" onClick={() => dispatch({ type: 'DECR' })}>
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

export default UseReducer;
