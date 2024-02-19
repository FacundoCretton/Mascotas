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
    dispatch(selectSubcategory(subcategory)); // Enviar el objeto completo de la subcategoría
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
        <SubcategoriasContainer subcategories={categories.find(cat => cat.category === selectedCategory)?.subcategories} selected={selectedSubcategory}>

          {categories
            .find((cat) => cat.category === selectedCategory)
            ?.subcategories.map((subcategory) => (
              <div
                key={subcategory.id}
                onClick={() => handleSubcategoryClick(subcategory)} // Enviamos el objeto completo de la subcategoría
                className={`subcategory ${subcategory.id === selectedSubcategory?.id ? 'selected' : ''}`} // Comparamos por el ID de la subcategoría
              >
                {subcategory.name}
              </div>
            ))}
        </SubcategoriasContainer>
      )}

      {/* Aquí puedes agregar el código para el filtrado de productos si es necesario */}
    </ContenedorPrincipal>
  );
};

export default Categorias;
