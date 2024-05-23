import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  function updatecount() {
    setCount(count + 1);
  }
  function updatecount2() {
    setCount2(count2 + 1);
  }
  useEffect(() => {
    console.log("count encountered")
  },[count2]);
  return (
    <>
      <h1>count 1 is {count}</h1>
      <button onClick={updatecount}>Increment</button>
      <h1>count 2 is {count2}</h1>
      <button onClick={updatecount2}>Increment</button>
    </>
  );
}

export default App;
