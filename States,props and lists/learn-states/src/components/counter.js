import React from "react";

function counter() {
  let count = 0;

  function updateCount() {
    count++;
  }

  return (
    <div>
      <p>The value of count is: {count}</p>
      <button onClick={updateCount}>Increment</button>
    </div>
  );
}

export default counter;
