import React, { createContext, useState } from "react";

export const ShoppingCreateContext = createContext();

export const CreateContext = (props) => {
  const [shoppingState, setShoppingState] = useState([
    {
      name: "Apple",
      quantity: 10,
      price: "1.2 $ / pounds",
      product: "fruit"
    },
    {
      name: "Banana & Plantation",
      quantity: 5,
      price: "3 $",
      product: "fruit"
    },
    {
      name: "Pears",
      quantity: 50,
      price: "10",
      product: "fruit"
    },
    {
      name: "Leamon & Lime",
      quantity: 100,
      price: "0.2 $",
      product: "fruit"
    },
    {
      name: "IPad",
      quantity: 1,
      price: "380 $",
      product: "Electronic"
    }
  ]);
  return (
    <ShoppingCreateContext.Provider value={[shoppingState, setShoppingState]}>
      {props.children}
    </ShoppingCreateContext.Provider>
  );
};
