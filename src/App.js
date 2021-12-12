import "./styles.css";
import React, { useReducer } from "react";

function reducer(currentState, action) {
  switch (action.type) {
    case "INC":
      return currentState + 1;
    case "DEC":
      return currentState - 1;
    default:
      return currentState;
  }
}

export default function App() {
  const [counter, dispatcher] = useReducer(reducer, 0);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        <h2>count: {counter}</h2>
        <button onClick={() => dispatcher({ type: "INC" })}>increament</button>
        <button onClick={() => dispatcher({ type: "DEC" })}>dcreament</button>
      </div>
    </div>
  );
}
