import React, { useState } from "react";
import reactLogo from "./assets/react.svg";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Code camp 18</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h2>{count}</h2>
      <img src={reactLogo}/>
    </>
  );
}

// export default App;
