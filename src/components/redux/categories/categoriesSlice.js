import { createSlice } from "@reduxjs/toolkit";
import { Categories } from "../../Data/Categories";

const INITIAL_STATE = {
  categories: Categories,
  selectedCategory: null,
  selectedSubcategory: {},
};


export const categoriesSlice = createSlice({
  name: "categories",
  initialState: INITIAL_STATE,
  reducers: {
    getCategories: (state) => {
      return state;
    },
    selectCategory: (state, action) => {
      return {
        ...state,
        selectedCategory:
          action.payload !== state.selectedCategory ? action.payload : null,
      };
    },
    selectSubcategory: (state, action) => {
      return {
        ...state,
        selectedSubcategory: action.payload,
      };
    },
  },
});

export const { getCategories, selectCategory, selectSubcategory } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
