import React, { useContext, useState } from "react";
import { ShoppingCreateContext } from "../CreateContext";

const FormContextComponent = () => {
  const [shoppingState, setShoppingState] = useContext(ShoppingCreateContext);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const priceHandler = (e) => {
    setPrice(e.target.value);
  };
  const quantityHandler = (e) => {
    setQuantity(e.target.value);
  };
  const productHandler = (e) => {
    setProduct(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setShoppingState((previousState) => [
      ...previousState,
      { name: name, price: price, quantity: quantity, product: product }
    ]);
    setPrice("");
    setQuantity("");
    setName("");
    setProduct("");
  };
  return (
    <div>
      <h2>Form Component is rendered</h2>
      <form onSubmit={submitHandler}>
        <input
          placeholder="NAME"
          type="text"
          value={name}
          onChange={nameHandler}
        />
        <input
          placeholder="PRODUCT"
          type="text"
          value={product}
          onChange={productHandler}
        />
        <input
          placeholder="PRICE"
          type="text"
          value={price}
          onChange={priceHandler}
        />
        <input
          placeholder="QUANTITY"
          type="text"
          value={quantity}
          onChange={quantityHandler}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormContextComponent;
