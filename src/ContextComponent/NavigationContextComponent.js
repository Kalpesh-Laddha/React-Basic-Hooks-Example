import React, { useContext } from "react";
import { ShoppingCreateContext } from "../CreateContext";

const NavigationContextComponent = () => {
  const [shoppingState, setShoppingState] = useContext(ShoppingCreateContext);
  return (
    <div>
      <h1>Nav Component is rendered</h1>
      <h2>Context API Shopping Mall</h2>
      <h4>Items added in a cart : {shoppingState.length}</h4>
    </div>
  );
};

export default NavigationContextComponent;
