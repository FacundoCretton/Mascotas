import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  SpanWrapper,
  ConsejosContainer,
  ConsejoItem,
  ExpandButton,
  ExpandButtonContainer,
  DivDeAbajo,
  ExpandedContent,
} from "./ListProductosStyles";
import { formatPrice } from "../../../utils/formatPrice";
import Button from "../../UI/Button/Button";
import { ButtonContainer } from "../ProductsStyles";
import ProductImageComponent from "../../UI/ProductImageComponent/ProductImageComponent";
import { PiSealCheckDuotone } from "react-icons/pi";
import { FaExclamationTriangle } from "react-icons/fa";




const ListProductos = ({ img, name,tags, price, desc, id, stock, beneficios, imgDorso}) => {
  const dispatch = useDispatch();


  const specifications = useSelector((state) =>
    state.specifications.specifications[id]
  );

  const [mostrarDorso, setMostrarDorso] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const toggleMostrarDorso = (mostrar) => {
    setMostrarDorso(mostrar);
  };
  return (
    <ListItem>

        <DivDelMedio>
        <ProductImageComponent
        src={mostrarDorso ? imgDorso : img}
        alt={name}
        mostrarDorso={mostrarDorso}
        onToggleDorso={toggleMostrarDorso}
      />
        <AirtonSenna>
        <DivDeArriba><ProductName>{name}</ProductName>
        <div>        
        {
          !stock && <OutOfStockMessage><FaExclamationTriangle/> Sin stock</OutOfStockMessage>
        }
        </div>

        </DivDeArriba>
        {specifications.consejos && (
        <ConsejosContainer>
          <p>Informacion importante sobre este producto</p>
          {Object.keys(specifications.consejos).map(consejo => (
            <ConsejoItem key={consejo}>
              <PiSealCheckDuotone/>{specifications.consejos[consejo]}
            </ConsejoItem>
          ))}
        </ConsejosContainer>
)}
            
        </AirtonSenna>
        <SpanWrapper>
          {beneficios && beneficios.map(beneficio => (
            <ElBeneficio key={beneficio.nombre}>
              <BeneficioIcono src={beneficio.icono} alt={beneficio.nombre} />
              <span>{beneficio.nombre}</span>
            </ElBeneficio>
          ))}
        </SpanWrapper>
        

      </DivDelMedio>
      <ProductDescription>{desc}</ProductDescription>

      <ProductPrice>{formatPrice(price)}</ProductPrice>
      <DivDeAbajo>
      {expanded && <ExpandedContent />} {/* Aquí se renderiza el contenido adicional si está expandido */}

      <ExpandButtonContainer>
          <ExpandButton onClick={toggleExpand}>
            {expanded ? "Leer menos" : "Leer más"}
            <span>{expanded ? "▲" : "▼"}</span>
          </ExpandButton>
      </ExpandButtonContainer>


      {stock ? (
        <ButtonContainer>
        <Button onClick={() => dispatch(addToCart({ img, name, desc, price, id,}))}>
          Agregar al carro
        </Button>
        </ButtonContainer>
      ) : (
        <ButtonContainer>
        <Button disabled>Sin stock</Button>
        </ButtonContainer>
          )}
      </DivDeAbajo>

    </ListItem>
  );
};

export default ListProductos;
