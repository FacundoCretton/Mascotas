import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cartSlide";
import {
  ListItem,
  ProductName,
  ProductDescription,
  ProductPrice,
  OutOfStockMessage,
  ProductListImage,
  DivDeArriba,
  DivDelMedio,
  BeneficioIcono,
  ElBeneficio,
} from "./ListProductosStyles";
import { formatPrice } from "../../../utils/formatPrice";
import Button from "../../UI/Button/Button";
import { ButtonContainer } from "../ProductsStyles";
import { LiaBoneSolid } from "react-icons/lia";


const ListProductos = ({ img, name,tags, price, desc, id, stock, beneficios}) => {
  const dispatch = useDispatch();

  
  return (
    <ListItem>
        <DivDeArriba><ProductName>{name}</ProductName></DivDeArriba>
        <DivDelMedio>
        <ProductListImage src={img} alt={name} />
        <ProductDescription>{desc}</ProductDescription>
        <div>
          {beneficios && beneficios.map(beneficio => (
            <ElBeneficio key={beneficio.nombre}>
              <BeneficioIcono src={beneficio.icono} alt={beneficio.nombre} />
              <span>{beneficio.nombre}</span>
            </ElBeneficio>
          ))}
        </div>
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
      <LiaBoneSolid/>

    </ListItem>
  );
};

export default ListProductos;
