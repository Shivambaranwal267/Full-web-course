import React, { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  //   let countState= useState(0);
  //   let count = countState(0);
  //   let setCount = count[1];

  function updateCount() {
    // count++;
    setCount(count + 1);
    console.log("count is", count);
  }

  return (
    <>
      <p>The value of count is: {count}</p>
      <button onClick={updateCount}>Increment</button>
    </>
  );
}

export default Counter;

// click = onClick
// hover = ...
