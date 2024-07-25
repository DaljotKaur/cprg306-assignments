"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ing) {
  if (ing) {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ing}`
    );

    const data = await response.json();

    if (!data.meals) {
      return [{ strMeal: `No recipies found for ${ing} :(` }];
    }

    return data.meals;
  } else {
    return [{ strMeal: "Please choose an item to see the meal plans!" }];
  }
}

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async (ingredient) => {
    const mealData = await fetchMealIdeas(ingredient);

    setMeals(mealData);
  };

  useEffect(() => {
    loadMealIdeas(ingredient);
  }, [ingredient]);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="bg-gray-900 text-lime-500 w-full font-bold py-2 px-4 rounded-xl drop-shadow-xl">
        <h1 className="text-3xl">Meal Ideas</h1>
      </div>

      <div className="bg-gray-400 text-lime-500 w-full py-2 px-4 my-2 rounded-xl">
        <ol>
          {meals.map((meal, index) => {
            return (
              <li
                className="font-bold text-xl text-lime-500 bg-gray-900 my-2 p-4 rounded-xl hover:bg-lime-700 hover:text-gray-900"
                key={index}
              >
                {meal.strMeal}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default MealIdeas;