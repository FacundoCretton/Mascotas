// Categorias.js
import React from "react";
import { Categoria } from "./Categoria";
import { useDispatch, useSelector } from "react-redux";
import { ContenedorPrincipal, TituloProductos, ContenedorCategorias, SubcategoriasContainer } from "./CategoriasStyles";
import { selectSubcategory } from "../redux/categories/categoriesSlice";

const Categorias = () => {
  const categories = useSelector((state) => state.categories.categories);
  const selectedCategory = useSelector((state) => state.categories.selectedCategory);
  const selectedSubcategory = useSelector((state) => state.categories.selectedSubcategory);
  const dispatch = useDispatch();

  const handleSubcategoryClick = (subcategory) => {
    dispatch(selectSubcategory(subcategory));
  };
  

  return (
    <ContenedorPrincipal>
      <TituloProductos>Nuestros productos</TituloProductos>
      <ContenedorCategorias>
        {categories.map((category) => (
          <Categoria key={category.id} {...category} />
        ))}
      </ContenedorCategorias>
      {selectedCategory && (
        <SubcategoriasContainer>
          {(categories.find((category) => category.category === selectedCategory) || {}).subcategories?.map((subcategory) => (
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
    </ContenedorPrincipal>
  );
};

export default Categorias;
