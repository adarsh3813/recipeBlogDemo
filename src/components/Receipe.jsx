import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentsSection from "./CommentsSection";

/*
This is the recipe body component
*/
const Recipe = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState();
  const [comments, setCommments] = useState();

  const fetchComments = async () => {
    const data = await fetch("https://dummyjson.com/comments?limit=10");
    const json = await data.json();
    setCommments(json.comments);
  };

  const getReceipeDetails = async () => {
    try {
      const data = await fetch(`https://dummyjson.com/recipes/${recipeId}`);
      const json = await data.json();
      setRecipe(json);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getReceipeDetails();
    fetchComments();
  }, []);

  return (
    recipe && (
      <>
        <div className="my-5 mx-6">
          <div className="flex mx-auto justify-evenly bg-gray-300 p-4">
            <div className="flex flex-col justify-between">
              <h2 className="text-5xl">{recipe.name}</h2>
              <div className="flex">
                {recipe.tags.map((tag) => (
                  <p
                    key={tag}
                    className="mr-3 px-2 py-1 bg-black text-white rounded-lg"
                  >
                    {tag}
                  </p>
                ))}
              </div>
            </div>
            <img className="w-[40%]" alt="receipe-image" src={recipe.image} />
          </div>
          <div className="flex bg-gray-100">
            <div className="bg-gray-200 p-4">
              <div className="">
                <h4 className="text-lg font-bold">
                  Some info for cooking nerds:{" "}
                </h4>
                <p>
                  <span className="font-semibold">Calories:</span>{" "}
                  {recipe.caloriesPerServing} kCals
                </p>
                <p>
                  <span className="font-semibold">Preparation Time:</span>{" "}
                  {recipe.prepTimeMinutes} minutes
                </p>
                <p>
                  <span className="font-semibold">Cooking TIme:</span>{" "}
                  {recipe.cookTimeMinutes} minutes
                </p>
                <p>Difficulty: {recipe.difficulty}</p>
              </div>
              <div>
                <p>
                  <span className="font-semibold">Meal Type:</span>
                  {recipe.mealType.map((type) => (
                    <span key={type}> {type}</span>
                  ))}
                </p>
                <p>
                  <span className="font-semibold">Servings:</span>{" "}
                  {recipe.servings}
                </p>
              </div>
            </div>
            <div className="p-4">
              <ul>
                <h4 className="text-lg font-bold">Ingredients:</h4>
                {recipe.ingredients.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <ul>
                <h4 className="text-lg font-bold">Instructions:</h4>
                {recipe.instructions.map((step, index) => (
                  <li key={index}>
                    {index + 1}: {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <CommentsSection comments={comments} />
        </div>
      </>
    )
  );
};

export default Recipe;
