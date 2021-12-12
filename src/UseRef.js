import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [name, setName] = useState("");
  const render = useRef(0);
  const inputRef = useRef(0);

  useEffect(() => {
    render.current = render.current + 1;
  });

  const displayName = (e) => {
    setName(e.target.value);
  };

  const focus = () => {
    console.log(inputRef.current.focus);
  };
  return (
    <div>
      <div>
        <h1>Example 1 - </h1>
        <h3>UseRef React Hook</h3>
        <input type="text" onChange={displayName} />
        <h3>Name : {name}</h3>
        <h3>Number of times component render {render.current}</h3>
      </div>
      <div>
        <h1>Example 2 - </h1>
        <input ref={inputRef} type="text" />
        <button onClick={focus}> HighLight </button>
      </div>
    </div>
  );
};

export default UseRef;
