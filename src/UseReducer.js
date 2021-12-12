import React, { useState, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "add-todo":
      return { todo: [...state.todo, { list: action.list, completed: false }] };
    case "delete-todo":
      return {
        todo: state.todo.map((value, index) =>
          index === action.index
            ? { ...value, completed: !value.completed }
            : value
        )
      };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [{ todo }, dispatcher] = useReducer(reducer, { todo: [] });
  const [list, setList] = useState([]);

  const updateListHandler = (e) => {
    setList(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatcher({ type: "add-todo", list });
    setList("");
  };
  return (
    <div>
      <h1>Welcome to useReducer Hook</h1>
      <form onSubmit={submitHandler}>
        <input value={list} type="text" onChange={updateListHandler} />
      </form>
      <h4>Display List</h4>
      {todo.map((t, index) => (
        <div
          key={t.list}
          onClick={() => {
            dispatcher({ type: "delete-todo", index });
          }}
          style={{
            textDecoration: t.completed ? "line-through" : ""
          }}
        >
          {t.list}
        </div>
      ))}
    </div>
  );
};

export default UseReducer;
