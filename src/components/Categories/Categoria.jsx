import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../redux/categories/categoriesSlice";
import { CardCategoria, CategoryIcon, CategoryName } from "./CategoriasStyles";




export const Categoria = ({ name, category, icon }) => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.categories.selectedCategory);

  

  const handleCategoryClick = () => {
    dispatch(selectCategory(category));
    // dispatch(selectSubcategory(null));
  };

  return (
    <CardCategoria 
      selected={category === selectedCategory} 
      onClick={handleCategoryClick}
    >
      <CategoryIcon>
        {icon}
      </CategoryIcon>

      <h2>{name}</h2>
      
    </CardCategoria>
  );
};
