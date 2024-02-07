import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


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
  max-width: 500px;
  max-height: 500px;
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
  max-width: 25%;
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
  margin-top: auto; /* Mueve el botón hacia la parte inferior */
  align-self: stretch; /* Ajusta la altura del botón para ocupar toda la columna */
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
    font-family: 'Arial', sans-serif; /* Cambia 'Arial' por la fuente que desees */
  }
`;

export const DescriptionText = styled(Typography)`
  && {
    font-size: 1.4rem;
    line-height: 1.6;
    font-family: 'Arial', sans-serif; /* Cambia 'Arial' por la fuente que desees */
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
  font-size: 1.6rem;
  margin-right: 0.5rem;
  align-self: flex-start;
`;

export const BeneficioTitle = styled(Typography)`
  && {
    font-size: 1.4rem;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
  }
`;

export const BeneficioText = styled(Typography)`
  && {
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
  }
`;
