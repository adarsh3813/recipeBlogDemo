import React, { useEffect, useState } from "react";
import RecipeRow from "./ReceipeRow";
import Shimmer from "./Shimmer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addRecipes } from "./utils/recipeListSlice";

const Home = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const recipes = useSelector((store) => store.recipeList);

  const fetchRecipes = async () => {
    try {
      const data = await fetch("https://dummyjson.com/recipes");
      const json = await data.json();
      dispatch(addRecipes(json.recipes));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  if (!user) {
    navigate("/login");
    return;
  }

  return recipes ? (
    <div>
      {recipes?.map((recipe) => {
        return <RecipeRow key={recipe.id} recipe={recipe} />;
      })}
    </div>
  ) : (
    <Shimmer />
  );
};

export default Home;
