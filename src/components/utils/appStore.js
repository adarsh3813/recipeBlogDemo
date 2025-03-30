import { configureStore } from "@reduxjs/toolkit";
import user from "./userSlice";
import recipeList from "./recipeListSlice";
import searchOnce from "./searchOnceSlice";

const appStore = configureStore({
  reducer: {
    user: user,
    recipeList: recipeList,
    searchOnce: searchOnce,
  },
});

export default appStore;
