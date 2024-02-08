import styled from 'styled-components';
import Typography from '@mui/material/Typography';

export const TituloH1 = styled.h1`
  font-size: 2rem;
  text-align: center;
`;

export const DetallesWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 2rem 0;
`;

export const ProductImage = styled.img`
  position: relative;
  max-width: 500px;
  max-height: 500px;
  overflow: hidden; /* Para ocultar el desbordamiento de la lupa */
  &:before {
    content: "";
    position: absolute;
    width: 100px; /* Ancho de la lupa */
    height: 100px; /* Altura de la lupa */
    border: 2px solid black; /* Borde de la lupa */
    border-radius: 50%; /* Forma redondeada */
    background: rgba(255, 255, 255, 0.5); /* Fondo semitransparente */
    pointer-events: none; /* Para que la lupa no interfiera con los eventos del mouse */
    display: none; /* Inicialmente oculto */
  }
  &:hover:before {
    display: block; /* Mostrar la lupa al pasar el mouse sobre la imagen */
  }
`;

export const ProductDetails = styled.div`
  flex-grow: 1;
  margin: 0 1rem;

  h2 {
    margin-top: 1rem;
  }
`;

export const Price = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const Specifications = styled.div`
  margin-top: 1rem;
`;

export const AdditionalInfo = styled.div`
  width: 30%;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const AddToCartButton = styled.button`
  background-color: #28a745;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  margin-top: auto;
  align-self: stretch;
`;

export const CustomQuantityInput = styled.input`
  width: 50px;
  padding: 5px;
  margin-left: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const DescriptionWrapper = styled.div`
  margin-top: 1rem;
`;

export const DescriptionTitle = styled(Typography)`
  && {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
    font-family: 'Arial', sans-serif;
  }
`;

export const DescriptionText = styled(Typography)`
  && {
    font-size: 1.4rem;
    line-height: 1.6;
  }
`;

export const BeneficiosWrapper = styled.div`
  margin-top: 1rem;
`;

export const BeneficioItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.5rem;
`;

export const BeneficioIcon = styled.span`
  background: #cccccc;
  font-size: 1rem;
  margin-right: 0.5rem;
  align-self: flex-start;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Efecto de sombra */
  padding: 4px;
`;

export const BeneficioText = styled(Typography)`
  && {
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 0.5rem;
  }
`;


export const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 25%;



`;