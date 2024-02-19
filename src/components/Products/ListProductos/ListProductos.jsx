import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cartSlide";
import {
  ListItem,
  ProductName,
  ProductDescription,
  ProductPrice,
  OutOfStockMessage,
  DivDeArriba,
  DivDelMedio,
  BeneficioIcono,
  ElBeneficio,
  AirtonSenna,
} from "./ListProductosStyles";
import { formatPrice } from "../../../utils/formatPrice";
import Button from "../../UI/Button/Button";
import { ButtonContainer } from "../ProductsStyles";
import { LiaBoneSolid } from "react-icons/lia";
import ProductImageComponent from "../../UI/ProductImageComponent/ProductImageComponent";


const ListProductos = ({ img, name,tags, price, desc, id, stock, beneficios, imgDorso}) => {
  const dispatch = useDispatch();

  const [mostrarDorso, setMostrarDorso] = useState(false);

  const toggleMostrarDorso = (mostrar) => {
    setMostrarDorso(mostrar);
  };
  return (
    <ListItem>
        <DivDeArriba><ProductName>{name}</ProductName></DivDeArriba>
        <DivDelMedio>
        <ProductImageComponent
        src={mostrarDorso ? imgDorso : img}
        alt={name}
        mostrarDorso={mostrarDorso}
        onToggleDorso={toggleMostrarDorso}
      />
        <AirtonSenna>
        <ProductDescription>{desc}</ProductDescription>
          {beneficios && beneficios.map(beneficio => (
            <ElBeneficio key={beneficio.nombre}>
              <BeneficioIcono src={beneficio.icono} alt={beneficio.nombre} />
              <span>{beneficio.nombre}</span>
            </ElBeneficio>
          ))}
        </AirtonSenna>
      </DivDelMedio>
        <ProductPrice>{formatPrice(price)}</ProductPrice>
      {stock ? (
        <ButtonContainer>
        <Button onClick={() => dispatch(addToCart({ img, name, desc, price, id,}))}>
          Agregar al carro
        </Button>
        </ButtonContainer>
      ) : (
        <OutOfStockMessage>Sin stock</OutOfStockMessage>
      )}

    </ListItem>
  );
};

export default ListProductos;
