import React from "react";

const CartContext = React.createContext({
  addItem: () => {},
  removeItem: () => {},
});

export default CartContext;
