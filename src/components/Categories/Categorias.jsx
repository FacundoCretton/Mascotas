import React from "react";
import { Categoria } from "./Categoria";
import { useDispatch, useSelector } from "react-redux";
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

  const handleSubcategoryClick = (subcategory) => {
    console.log('selectedSubcategory:', selectedSubcategory);
    console.log('Is selected:', subcategory, selectedSubcategory);
  };

  // Obtenemos las subcategorías de la categoría seleccionada
  const subcategories =
    categories.find((category) => category.category === selectedCategory)?.subcategories;

  return (
    <ContenedorPrincipal>
      <TituloProductos>Nuestros productos</TituloProductos>
      <ContenedorCategorias>
        {categories.map((category) => (
          <Categoria 
            key={category.id}
          
           {...category} />
        ))}
      </ContenedorCategorias>
      {selectedCategory && (
        <SubcategoriasContainer subcategories={subcategories} selected={selectedSubcategory}>
          {subcategories?.map((subcategory) => (
            <div
              key={subcategory}
              onClick={() => handleSubcategoryClick(subcategory)}
              className={` ${subcategory === selectedSubcategory ? 'selected' : ''}`}
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
