// categoriesSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { Categories } from "../../Data/Categories";

const INITIAL_STATE = {
  categories: Categories,
  selectedCategory: null,
  selectedSubcategory: null,
};

export const categoriesSlice = createSlice({
  name: "Categories",
  initialState: INITIAL_STATE,
  reducers: {
    getCategories: (state) => {
      return state;
    },
    selectCategory: (state, action) => {
      const selectedCategory = action.payload;
      return {
        ...state,
        selectedCategory,
        selectedSubcategory: null, // Reiniciar la subcategoría al cambiar la categoría
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

export const { getCategories, selectCategory, selectSubcategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
