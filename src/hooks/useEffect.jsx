import React, { useState, useEffect } from 'react';
import './style.css';

// UseEffect hook ->

//What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.

// Why is useEffect called inside a component? Placing useEffect inside the component lets us access the myNum state variable (or any props) right from the effect. We don’t need a special API to read it — it’s already in the function scope. Hooks embrace JavaScript closures and avoid introducing React-specific APIs where JavaScript already provides a solution.

// Does useEffect run after every render? Yes! By default, it runs both after the first render and after every update. (We will later talk about how to customize this.) Instead of thinking in terms of “mounting” and “updating”, you might find it easier to think that effects happen “after render”. React guarantees the DOM has been updated by the time it runs the effects.

const UseEffect = () => {
  const [myNum, setMyNum] = useState(0);

  useEffect(() => {
    document.title = `Chats(${myNum})`;
  }); // ` useEffect(()=>{}, []) ` if we use this array notation -> [] <- than this effect only render once but if we don't use it then it will render everytime when I trigger it.

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
      </div>
    </>
  );
};

export default UseEffect;
