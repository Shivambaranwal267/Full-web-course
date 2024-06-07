import { useState } from "react";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import Counter from "./components/Counter";
import Fruits from "./components/Fruits";
import Notes from "./components/Notes";
import UserForm from "./forms and hooks/UserForm";
import UsseEffectHook from "./forms and hooks/UsseEffectHook";
import Hooks from "./forms and hooks/Hooks";
import NewsApp from "./forms and hooks/NewsApp";

function App() {
  const [countInParent, setCountInParent] = useState(0);

  function updateCountInParent(count) {
    setCountInParent(count);
  }

  const uploadData = () => {
    console.log("I will start uploading the data now");
  };

  return (
    <div>
      {/* <Counter /> */}

      {/* <Fruits /> */}
      {/* <Notes/> */}

      {/* <p>Inside the parent: {countInParent}</p>
      <Child1 onCountUpdate={updateCountInParent} />
      <Child2 countFromParent={countInParent} uploadData={uploadData} /> */}

      
    {/*  */}

    {/* <UserForm/> */}
    {/* <UsseEffectHook/> */}

    {/* <Hooks/> */}

    <NewsApp/>

    </div>
  );
}

export default App;
