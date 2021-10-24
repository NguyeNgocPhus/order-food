import AvaliableMeals from "./AvaliableMeals";
import "./Meals.css";
import MealSummary from "./MealSummary";
const Meals = () => {
  return (
    <section>
      <MealSummary></MealSummary>
      <AvaliableMeals></AvaliableMeals>
    </section>
  );
};
export default Meals;
