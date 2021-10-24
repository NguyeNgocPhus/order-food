import { useContext, useState, useEffect } from "react";
import CartContext from "../store/cart-context";
import "./HeaderCartButton.css";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);
  const [btnIsHighLight, setbtnIsHighLight] = useState(false);
  const className = `cartButton${btnIsHighLight ? " bump" : ""}`;
  const { items } = ctx;
  const numberOfCartItem = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setbtnIsHighLight(true);
    const timer = setTimeout(() => {
      setbtnIsHighLight(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={className} onClick={props.onClick}>
      <ion-icon name="cart-outline"></ion-icon>
      <h2 class="cartButton--name">Your Cart</h2>
      <span className="cartButton-amount">{numberOfCartItem}</span>
    </button>
  );
};
export default HeaderCartButton;
