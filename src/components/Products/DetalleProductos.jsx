import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetallesWrapper, TituloH1, ProductImage, ProductDetails, Price, Specifications, DescriptionWrapper, DescriptionTitle, DescriptionText, BeneficiosWrapper, ImageColumn, BeneficioIcon } from "./DetalleProductosStyles";
import { Divider } from "antd";
import CompositionTable from "./CompositionTable";
import { ListItem, ListItemText } from "@mui/material";
import PetsIcon from '@mui/icons-material/Pets';
import AdditionalInfoComponent from "./AditionalInfoComponent";

const DetalleProducto = () => {
  const { id } = useParams();
  const productsByCategory = useSelector((state) => state.products.products);
  const [cantidad, setCantidad] = useState(1);
  const [cantidadAdicional, setCantidadAdicional] = useState(0);
  const [inputValue, setInputValue] = useState(null);

  const allProducts = Object.values(productsByCategory).flat();

  const producto = allProducts.find((product) => product.id === parseInt(id));

  const specifications = useSelector((state) =>
    state.specifications.specifications[id]
  );

  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  const handleCantidadChange = (value) => {
    if (value === "masDe3") {
      setInputValue(value);
    } else {
      setCantidadAdicional(0);
      setInputValue(value);
    }
    setCantidad(value);
  };

  const handleCantidadAdicionalChange = (value) => {
    setCantidadAdicional(value);
  };

  const addToCart = () => {
    const total = cantidad === "masDe3" ? cantidadAdicional : cantidad;
    console.log(
      `Agregado al carrito: ${total} unidades de ${producto.name}`
    );
  };

  const totalPrice =
    producto.price * (cantidad === "masDe3" ? cantidadAdicional : cantidad);

  return (
    <DetallesWrapper>
      <ImageColumn>
        <ProductImage src={producto.img} alt={producto.name} />
        <ProductImage src={producto.imgDorso} alt={producto.name} />
      </ImageColumn>

      <ProductDetails>
        <TituloH1>{producto.name}</TituloH1>
        <Divider/>
        <DescriptionWrapper>
          <DescriptionTitle>Descripción:</DescriptionTitle>
          <DescriptionText>{specifications.desc}</DescriptionText>
        </DescriptionWrapper>
        <Price>Precio: ${producto.price}</Price>

        {specifications && (
          <Specifications>
            {specifications.beneficios && (
              <BeneficiosWrapper>
                <h3>Beneficios:</h3>
                <ListBeneficios beneficios={specifications.beneficios} />
              </BeneficiosWrapper>
            )}
            <h2>Especificaciones:</h2>
            {specifications.composicion && (
              <CompositionTable composition={specifications.composicion} />
            )}
          </Specifications>
        )}
      </ProductDetails>
      
      <AdditionalInfoComponent 
        producto={producto} 
        totalPrice={totalPrice} 
        addToCart={addToCart} 
        cantidad={cantidad} 
        handleCantidadChange={handleCantidadChange} 
        inputValue={inputValue} 
        handleCantidadAdicionalChange={handleCantidadAdicionalChange} 
        cantidadAdicional={cantidadAdicional} 
      />
    </DetallesWrapper>
  );
};

const ListBeneficios = ({ beneficios }) => {
  return (
    <BeneficiosWrapper>
      {beneficios.map((beneficio, index) => (
        <React.Fragment key={index}>
          <ListItem>
            <BeneficioIcon>
              <PetsIcon style={{ color: "warning" }} /> {/* Cambia el color a verde */}
            </BeneficioIcon>
            <ListItemText primary={beneficio} />
          </ListItem>
          {index !== beneficios.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </BeneficiosWrapper>
  );
}

export default DetalleProducto;
