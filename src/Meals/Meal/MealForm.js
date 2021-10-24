import { useRef } from "react";
import "./MealForm.css";

const MealForm = (props) => {
  const amountInputRef = useRef();
  const onSubmitHandle = (event) => {
    event.preventDefault();
    const enterAmount = +amountInputRef.current.value;
    props.AmountMeals(enterAmount);
  };
  return (
    <form className="form" onSubmit={onSubmitHandle}>
      <div className="formInput">
        <div className="inputTitle">Amount</div>
        <input
          ref={amountInputRef}
          type="number"
          max="5"
          min="1"
          step="1"
          defaultValue="1"
        ></input>
      </div>
      <button>Add</button>
    </form>
  );
};
export default MealForm;
