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

  const handleSubcategoryClick = (subcategory) => {
    console.log("Subcategoría seleccionada:", subcategory); // Agregamos un log aquí
    dispatch(selectSubcategory(subcategory));
  };

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
        <SubcategoriasContainer>
          {categories
            .find((cat) => cat.category === selectedCategory)
            ?.subcategories.map((subcategory) => (
              <div
                key={subcategory.id}
                onClick={() => handleSubcategoryClick(subcategory)}
                className={`subcategory ${selectedSubcategory && subcategory.id === selectedSubcategory.id ? 'selected' : ''}`}
              >
                {subcategory.name}
              </div>
            ))}
        </SubcategoriasContainer>
      )}
    </ContenedorPrincipal>
  );
};

export default Categorias;
