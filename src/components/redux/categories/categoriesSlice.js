// categoriesSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { Categories } from "../../Data/Categories";

const INITIAL_STATE = {
  categories: Categories,
  selectedCategory: 'Todos',
  selectedSubcategory: null,
};

export const categoriesSlice = createSlice({
  name: Categories,
  initialState: INITIAL_STATE,
  reducers: {
    getCategories: (state) => {
      return state;
    },
    selectCategory: (state, action) => {
      const selectedCategory = action.payload;

      // Actualizar el arreglo de subcategorías en el estado
      const categories = state.categories.map((category) => {
        if (category.category === selectedCategory) {
          return { ...category, subcategories: category.subcategories };
        } else {
          return category;
        }
      });

      return {
        ...state,
        categories,
        selectedCategory,
        selectedSubcategory: null, // Reiniciar la subcategoría al cambiar la categoría
      };
    },
    selectSubcategory: (state, action) => {
      const selectedCategory = state.selectedCategory;
      const selectedSubcategory = action.payload;
      return {
        ...state,
        selectedSubcategory,
        // También puedes actualizar las subcategorías del estado si es necesario
        subcategories: state.categories[selectedCategory]?.subcategories,
      };
    },
  },
});

export const { getCategories, selectCategory, selectSubcategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
