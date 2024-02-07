import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetallesWrapper, TituloH1, ProductImage, ProductDetails, Price, Specifications, AdditionalInfo, AddToCartButton, DescriptionWrapper, DescriptionTitle, DescriptionText, BeneficiosWrapper, BeneficioItem, BeneficioIcon, BeneficioText } from "./DetalleProductosStyles";
import { InputNumber, Select  } from "antd";
import "antd/dist/antd";
import CompositionTable from "./CompositionTable";
import { CheckCircle } from "@mui/icons-material"; // Importar el icono CheckCircle de Material-UI




const { Option } = Select;

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
    setInputValue(value);
  };

  const addToCart = () => {
    const total = cantidad === "masDe3" ? cantidadAdicional : cantidad;
    console.log(
      `Agregado al carrito: ${total} unidades de ${producto.name}`
    );
  };

  const totalPrice =
    producto.price * (cantidad === "masDe3" ? cantidadAdicional : cantidad);

  const dropdownRender = (menu) => {
    return (
      <div>
        {menu}
        {inputValue === "masDe3" && (
          <InputNumber
            min={0}
            value={cantidadAdicional}
            onChange={handleCantidadAdicionalChange}
            style={{ marginTop: 8 }}
          />
        )}
      </div>
    );
  };

  return (
    <DetallesWrapper>
      <ProductImage src={producto.img} alt={producto.name} />
      <ProductDetails>
        <TituloH1>{producto.name}</TituloH1>
        <DescriptionWrapper>
              <DescriptionTitle>Descripción:</DescriptionTitle>
              <DescriptionText>{specifications.desc}</DescriptionText>
            </DescriptionWrapper>        <Price>Precio: ${producto.price}</Price>
        <Select
          value={inputValue}
          style={{ width: 120 }}
          onChange={handleCantidadChange}
          dropdownRender={dropdownRender}
        >
          <Option value={1}>1</Option>
          <Option value={2}>2</Option>
          <Option value={3}>3</Option>
          <Option value={"masDe3"}>Más de 3 unidades</Option>
        </Select>
        {specifications && (
          <Specifications>
            <h2>Especificaciones:</h2>
            {specifications.composicion && (
              <CompositionTable composition={specifications.composicion} />
            )}
{specifications.beneficios && (
  <BeneficiosWrapper>
    <h3>Beneficios:</h3>
    {specifications.beneficios.map((beneficio, index) => (
      <BeneficioItem key={index}>
        <BeneficioIcon>
          <CheckCircle color="primary" /> 
        </BeneficioIcon>
        <BeneficioText>{beneficio}</BeneficioText>
      </BeneficioItem>
    ))}
  </BeneficiosWrapper>
)}
          </Specifications>
        )}
      </ProductDetails>
      <AdditionalInfo>
        <h2>Información adicional:</h2>
        <p>Calificación: {producto.calificacion}</p>
        <p>Más formas de entrega...</p>
        <AddToCartButton onClick={addToCart}>Agregar al carrito</AddToCartButton>
        <p>Total: ${totalPrice}</p>
      </AdditionalInfo>
    </DetallesWrapper>
  );
};

export default DetalleProducto;