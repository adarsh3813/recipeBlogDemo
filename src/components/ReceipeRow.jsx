import React from "react";
import { useNavigate } from "react-router-dom";

const RecipeRow = ({ recipe }) => {
  const navigate = useNavigate();

  const handleViewClick = (id) => {
    navigate(`/recipe-info/${id}`);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg border border-gray-200 mb-3">
      <div className="grid grid-cols-6">
        <div className="col-span-4">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            {recipe.name}
          </h3>
          <p className="text-gray-600 mb-4">Cuisine: {recipe.cuisine}</p>
          <p className="text-gray-600 mb-4">
            Difficulty level: {recipe.difficulty}
          </p>
          <ul className="flex flex-wrap gap-2 mb-4">
            Tags:
            {recipe.tags.map((item, index) => (
              <li
                key={index}
                className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2">
          <img className="rounded-sm" alt="photo" src={recipe.image} />
        </div>
      </div>
      <div className="flex justify-between text-gray-700">
        <div className="flex text-gray-700">
          <div className="mr-3">
            <p>Rating: {recipe.rating}⭐</p>
            <p>Reviews: {recipe.reviewCount}👀</p>
          </div>
          <p>Preparation Time: {recipe.prepTimeMinutes}⏱️</p>
        </div>
        <div className="mt-3">
          <button
            className="px-2 py-1 bg-blue-600 hover:bg-blue-800 text-white rounded-md"
            onClick={() => handleViewClick(recipe.id)}
          >
            View recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeRow;
