import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [employeeType, setEmployeeType] = useState("posts");
  const [record, setRecord] = useState([]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const resizeHandler = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    //setWindowWidth(window.innerWidth);
  }, [windowWidth]);

  useEffect(() => {
    console.log("useEffect is render every single time");
    fetch(`https://jsonplaceholder.typicode.com/${employeeType}`)
      .then((response) => response.json())
      .then((json) => setRecord(json));

    return () => {
      console.log("call useEffect return method");
    };
  }, [employeeType]);
  return (
    <div>
      <div>
        <h1>Window width</h1>
        <h2>{windowWidth}</h2>
      </div>
      <button
        onClick={() => {
          setEmployeeType("posts");
        }}
      >
        Manager
      </button>
      <button
        onClick={() => {
          setEmployeeType("users");
        }}
      >
        Developer
      </button>
      <button
        onClick={() => {
          setEmployeeType("comments");
        }}
      >
        Tester
      </button>
      <h2>{employeeType}</h2>
      <h3>
        {record.map((item) => {
          return <pre key={item.id}>{JSON.stringify(item)}</pre>;
        })}
      </h3>
    </div>
  );
};

export default UseEffect;
