// Categorias.js
import React from "react";
import { Categoria } from "./Categoria";
import { useDispatch, useSelector } from "react-redux";
import { selectSubcategory } from "../redux/categories/categoriesSlice";
import {
  ContenedorPrincipal,
  TituloProductos,
  ContenedorCategorias,
  SubcategoriasContainer,
} from "./CategoriasStyles";

const Categorias = () => {
  const categories = useSelector((state) => state.categories.categories);
  const selectedCategory = useSelector((state) => state.categories.selectedCategory);
  const selectedSubcategory = useSelector((state) => state.categories.selectedSubcategory);
  const dispatch = useDispatch();
  
  // Manejar el click en una subcategoría
  const handleSubcategoryClick = (subcategory) => {
    dispatch(selectSubcategory(subcategory));
  };

  console.log('Subcategorías:', categories.find(cat => cat.category === selectedCategory)?.subcategories);
  console.log('Subcategoría seleccionada:', selectedSubcategory);

  return (
    <ContenedorPrincipal>
      <TituloProductos>Nuestros productos</TituloProductos>
      <ContenedorCategorias>
        {categories.map((category) => (
          <Categoria
            key={category.id}
            {...category}
          />
        ))}
      </ContenedorCategorias>
      {selectedCategory && (
        <SubcategoriasContainer subcategories={categories.find(cat => cat.category === selectedCategory)?.subcategories} selected={selectedSubcategory}>

          {categories
            .find((cat) => cat.category === selectedCategory)
            ?.subcategories.map((subcategory) => (
              <div
                key={subcategory}
                onClick={() => handleSubcategoryClick(subcategory)}
                className={`subcategory ${subcategory === selectedSubcategory ? 'selected' : ''}`}
              >
                {subcategory}
              </div>
            ))}
        </SubcategoriasContainer>
      )}
    </ContenedorPrincipal>
  );
};

export default Categorias;
