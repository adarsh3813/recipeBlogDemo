import { createSlice } from "@reduxjs/toolkit";

const searchOnceSclice = createSlice({
  name: "searchOnce",
  initialState: true,
  reducers: {
    updateSearchOnce: (state, action) => {
      return action.payload;
    },
  },
});

export const { updateSearchOnce } = searchOnceSclice.actions;
export default searchOnceSclice.reducer;
