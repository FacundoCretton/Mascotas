// Categoria.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory, selectSubcategory } from "../redux/categories/categoriesSlice";
import { CardCategoria, SubcategoriasContainer } from "./CategoriasStyles";

export const Categoria = ({ name, category, subcategories }) => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.categories.selectedCategory);
  const selectedSubcategory = useSelector((state) => state.categories.selectedSubcategory);

  const handleCategoryClick = () => {
    dispatch(selectCategory(category));
    dispatch(selectSubcategory(null)); // Reiniciar la subcategoría al cambiar la categoría
  };

  const handleSubcategoryClick = (subcategory) => {
    dispatch(selectSubcategory(subcategory));
  };

  return (
    <CardCategoria selected={category === selectedCategory} onClick={handleCategoryClick}>
      <h2>{name}</h2>
      {/* Mostrar las subcategorías solo si la categoría está seleccionada */}
      {category === selectedCategory && subcategories && (
        <SubcategoriasContainer>
          {subcategories.map((subcategory) => (
            <div
              key={subcategory}
              onClick={() => handleSubcategoryClick(subcategory)}
              className={subcategory === selectedSubcategory ? "selected" : ""}
            >
              {subcategory}
            </div>
          ))}
        </SubcategoriasContainer>
      )}
    </CardCategoria>
  );
};
