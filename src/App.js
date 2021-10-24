import { useState } from "react";
import "./App.css";
import Cart from "./Cart/Cart";
import Header from "./Header/Header";
import Meals from "./Meals/Meals";
import CartProvide from "./store/CartProvide";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  function showCartHandler() {
    setCartIsShow(true);
  }
  function hiddenCartHandler() {
    setCartIsShow(false);
  }

  return (
    <CartProvide>
      {cartIsShow && <Cart hiddenCartHandler={hiddenCartHandler}></Cart>}
      <Header showCartHandler={showCartHandler}></Header>
      <Meals></Meals>
    </CartProvide>
  );
}

export default App;
