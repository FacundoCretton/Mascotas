// Categorias.js
import React from "react";
import { Categoria } from "./Categoria";
import { useSelector } from "react-redux";
import { ContenedorPrincipal, TituloProductos, ContenedorCategorias } from "./CategoriasStyles";

const Categorias = () => {
  const categories = useSelector((state) => state.categories.categories);

  return (
    <ContenedorPrincipal>
      <TituloProductos>Nuestros productos</TituloProductos>
      <ContenedorCategorias>
        {categories.map((category) => (
          <Categoria {...category} key={category.id} />
        ))}
      </ContenedorCategorias>
    </ContenedorPrincipal>
  );
};

export default Categorias;
