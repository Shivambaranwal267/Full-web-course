import React, { useEffect, useState } from "react";


function UsseEffectHook() {  // return a JSX
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  function callThisOnUNmount() {
    console.log('unmounting here...');
  }

  useEffect(() => {
    console.log(name, "name updated");

    return callThisOnUNmount;
  }, [name]);

  useEffect(() => {
    console.log(counter, "first time mounted");
  }, [counter]);

  useEffect(() => {
    console.log("re-rendering happened");
  });

  return (
    <div>
      <p>{counter}</p>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}

export default UsseEffectHook;
