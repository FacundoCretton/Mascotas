// ProductImageComponent.jsx
import React from "react";
import { handleBackClick, handleForwardClick } from "../../Products/Flechas";
import { FlechaDerecha, FlechaIzquierda, ImageContainer, ImgComponent } from "./ProductImageComponentStyles";

const ProductImageComponent = ({ src, alt, mostrarDorso, onToggleDorso }) => {


  return (
    <ImageContainer>
      <FlechaIzquierda onClick={() => handleBackClick(mostrarDorso, onToggleDorso)} />
      
      <ImgComponent src={src} alt={alt} className={`${mostrarDorso ? "rotar dorso-visible" : ""}`} />
      <FlechaDerecha onClick={() => handleForwardClick(mostrarDorso, onToggleDorso)} />
    </ImageContainer>
  );
};

export default ProductImageComponent;


