import React, { useContext } from "react";
import { ShoppingCreateContext } from "../CreateContext";

const DisplayContextComponent = () => {
  const [shoppingState, setShoppingState] = useContext(ShoppingCreateContext);
  return (
    <div>
      <h2>Display Cpmponent is rendered</h2>
      {shoppingState.map((list) => {
        return (
          <div key={list.price}>
            <h2>Name:{list.name}</h2>
            <h2>Quantity:{list.quantity}</h2>
            <h2>Product:{list.product}</h2>
            <h2>Price:{list.price}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayContextComponent;
