import { useContext } from "react";
import CartContext from "../store/cart-context";
import "./CartItem.css";

const CartItem = (props) => {
  const ctx = useContext(CartContext);
  const price = `$${props.price}`;
  const amount = `x ${props.amount}`;
  const removeItemHandle = () => {
    ctx.removeItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: props.amount,
    });
  };
  const addItemHandle = () => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: 1,
    });
  };
  return (
    <li className="cartItem">
      <div className="cartItem-infor">
        <h2 className="cartItem-name">{props.name}</h2>
        <div className="cartItem-total">
          <div className="cartItem-price">{price}</div>
          <div className="cartItem-amount">{amount}</div>
        </div>
      </div>
      <div className="cartItem-action">
        <button className="cartItem-remove" onClick={removeItemHandle}>
          <span>-</span>
        </button>
        <button className="cartItem-add" onClick={addItemHandle}>
          <span>+</span>
        </button>
      </div>
    </li>
  );
};
export default CartItem;
