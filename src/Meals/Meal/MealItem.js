import { useContext } from "react";
import CartContext from "../../store/cart-context";
import MealForm from "./MealForm";
import "./MealItem.css";
const MealItem = (props) => {
  const ctx = useContext(CartContext);
  const AmountMeals = (value) => {
    const MealData = {
      id: props.id,
      name: props.name,
      desc: props.desc,
      price: props.price,
      amount: value,
    };
    ctx.addItem(MealData);
  };
  const price = `$${props.price}`;
  return (
    <li className="meal">
      <div className="meal-imformation">
        <h3 className="meal-name">{props.name}</h3>
        <div className="meal-desc">{props.desc}</div>
        <div className="meal-price">{price}</div>
      </div>
      <MealForm AmountMeals={AmountMeals}></MealForm>
    </li>
  );
};
export default MealItem;
