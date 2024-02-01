import React, { useState } from "react";

function counter() {
  let [count, setCount] = useState(0);

  function updateCount() {
    setCount(count++);
    // consol .log("count is ", count);
  }

  return (
    <div>
      <p>The value of count is: {count}</p>
      <button onClick={updateCount}>Increment</button>
    </div>
  );
}

export default counter;
