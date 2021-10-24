import "./AvaliableMeals.css";
import MealItem from "./Meal/MealItem";
import { useState, useEffect } from "react";
const AvaliableMeals = (props) => {
  const [stateMeals, setStateMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");
  useEffect(() => {
    const meals = [];
    let DataMeals = [];
    const loadData = async () => {
      const data = await fetch(
        "https://test-732b9-default-rtdb.firebaseio.com/meals.json"
      );
      if (!data.ok) {
        throw new Error("Something wrong");
      }

      DataMeals = await data.json();

      for (let key of Object.keys(DataMeals)) {
        meals.push({
          id: key,
          name: DataMeals[key].name,
          desc: DataMeals[key].desc,
          price: DataMeals[key].price,
        });
      }
      setStateMeals(meals);
      setIsLoading(true);
    };
    loadData().catch((error) => {
      setIsLoading(true);
      setIsError(error.message);
    });
  }, []);
  const mealList = stateMeals.map((meal) => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        desc={meal.desc}
        price={meal.price}
      ></MealItem>
    );
  });
  return (
    <section className="AvaliableMeals">
      {isError && <h1>{isError}</h1>}
      {!isLoading && <h1>Loading.....</h1>}
      {isLoading && !isError && <ul>{mealList}</ul>}
    </section>
  );
};
export default AvaliableMeals;
