import { useContext, useState } from "react";
import CartContext from "../store/cart-context";
import Modal from "../UI/Modal";
import "./Cart.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);
  const price = `$${ctx.totalAmount}`;

  const orderHandle = () => {
    setIsCheckout(true);
  };
  const cartItem = (
    <ul className="cart-list">
      {ctx.items.map((item) => {
        return (
          <CartItem
            id={item.id}
            key={item.id}
            name={item.name}
            desc={item.desc}
            price={item.price}
            amount={item.amount}
          ></CartItem>
        );
      })}
    </ul>
  );

  return (
    <Modal onClose={props.hiddenCartHandler}>
      {cartItem}
      <div className="cart-info">
        <span>Total Amount</span>
        <span>{price}</span>
      </div>
      {isCheckout && <Checkout onClose={props.hiddenCartHandler}></Checkout>}

      {!isCheckout && (
        <div className="cart-btn">
          <button className="btn btn-close" onClick={props.hiddenCartHandler}>
            Close
          </button>
          <button className="btn btn-pay" onClick={orderHandle}>
            Order
          </button>
        </div>
      )}
    </Modal>
  );
};
export default Cart;
