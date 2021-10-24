import { useReducer } from "react";
import CartContext from "./cart-context";
const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, active) => {
  if (active.type === "addItem") {
    const updateTotalAmount =
      state.totalAmount + active.value.price * active.value.amount;
    const indexItem = state.items.findIndex((item) => {
      return item.id === active.value.id;
    });
    let dataItems;
    if (indexItem >= 0) {
      const updateAmount = state.items[indexItem].amount + active.value.amount;
      const updateItem = {
        ...state.items[indexItem],
        amount: updateAmount,
      };
      dataItems = [...state.items];

      dataItems[indexItem] = updateItem;
    } else {
      dataItems = state.items.concat([active.value]);
    }

    return {
      items: dataItems,
      totalAmount: updateTotalAmount,
    };
  }
  if (active.type === "removeItem") {
    const indexItem = state.items.findIndex((item) => {
      return item.id === active.value.id;
    });

    const quantityAmountItem = state.items[indexItem].amount;
    let dataItems;
    const updateAmount = state.totalAmount - active.value.price;
    if (quantityAmountItem > 1) {
      dataItems = {
        items: [...state.items],
        totalAmount: updateAmount,
      };

      const updateItem = {
        ...state.items[indexItem],
        amount: state.items[indexItem].amount - 1,
      };
      dataItems.items[indexItem] = updateItem;
      return {
        items: dataItems.items,
        totalAmount: updateAmount,
      };
    } else {
      dataItems = state.items.filter((item) => {
        return item.id !== active.value.id;
      });
      return {
        items: dataItems,
        totalAmount: updateAmount,
      };
    }
  }
};

const CartProvide = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItem = (value) => {
    dispatchCartState({ type: "addItem", value: value });
  };
  const removeItem = (value) => {
    dispatchCartState({ type: "removeItem", value: value });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem,
    removeItem,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvide;
