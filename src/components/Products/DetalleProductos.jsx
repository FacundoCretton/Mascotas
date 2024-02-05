import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../Data/ProductsData";
import { productsSpecifications } from "../Data/especificacionesProductos";

const DetalleProducto = () => {
  
    const { id } = useParams();
    const producto = products.find((product) => product.id === parseInt(id));
  
    if (!producto) {
      return <p>Producto no encontrado</p>;
    }
  
    const especificaciones = productsSpecifications[id];
  
    return (
      <div>
        <h1>{producto.name}</h1>
        <img src={producto.img} alt={producto.name} />
        <p>{producto.desc}</p>
        
        <p>Precio: ${producto.price}</p>
        {/* Renderizar otras propiedades básicas del producto */}
        {especificaciones && (
          <>
            <h2>Especificaciones:</h2>
            <p>Peso: {especificaciones.peso}</p>
            <p>Descripción detallada: {especificaciones.descripcion}</p>
            {/* Renderizar otras especificaciones */}
          </>
        )}
      </div>
    );
  };
  
  export default DetalleProducto;