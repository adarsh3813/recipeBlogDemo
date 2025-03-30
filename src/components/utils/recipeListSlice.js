import { createSlice } from "@reduxjs/toolkit";

const recipeListSclice = createSlice({
  name: "recipeList",
  initialState: null,
  reducers: {
    addRecipes: (state, action) => {
      return action.payload;
    },
    updateRecipes: (state, action) => {
      return action.payload;
    },
  },
});

export const { addRecipes, updateRecipes } = recipeListSclice.actions;
export default recipeListSclice.reducer;
