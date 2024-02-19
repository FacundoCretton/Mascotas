import styled from 'styled-components';

export const ListProductosContainer = styled.div`
  display: flex;
  flex-direction: column;  
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  width: 90%;
  margin: 0 auto;
`;

export const ListItem = styled.div`
  display: flex;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
  flex-direction: column;
`;

export const DivDeArriba = styled.div`
  display: flex;
  justify-content: center;
`;

export const DivDelMedio = styled.div`

  display: flex;
  /* justify-content: space-between; */
`;

export const BeneficioIcono = styled.img`
  width: 60px; 
  height: 60px;
  border-radius: 50%;
  border: 1px dashed black; /* Color de borde en gris claro */
  padding: 9px;
  margin: auto;
  transition: transform 0.3s, background-color 0.3s; /* Agrega una transición suave */

  &svg{
    padding: 25px;
  }
  &:hover {
    transform: scale(1.1);
    background-color: #f0f0f0; /* Color de fondo en gris claro más claro */
    border-color: #999; /* Color de borde más oscuro en hover */
  }
`;

export const ElBeneficio = styled.div`
  text-align: center; /* Centra el contenido horizontalmente */
  margin-top: 10px; /* Espacio entre beneficios */
`;



export const ProductName = styled.h3`
  color: #333;
  margin-bottom: 10px;
  font-family: "Comfortaa";
  font-weight: bold;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  
`;

export const ProductDescription = styled.p`
  margin-bottom: 10px;
  font-family: "Noto Sans";
`;

export const ProductPrice = styled.p`
  font-weight: bold;
  color: #666;
`;

export const OutOfStockMessage = styled.p`
  color: red;
  font-style: italic;
`;


export const ProductListImage = styled.img`
  position: relative;
  max-width: 500px;
  max-height: 500px;
  overflow: hidden;
  transition: transform 0.5s ease; // Transición suave para la transformación
  &:before {
    content: "";
    position: absolute;
    width: 100px;
    height: 100px;
    border: 2px solid black;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    pointer-events: none;
    display: none;
  }
  &:hover:before {
    display: block;
  }
  &.dorso-visible {
    transform: rotateY(180deg) scaleX(-1); // Aplicamos la transformación para mostrar el dorso y la inversión horizontal
  }
`;




export const AirtonSenna = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  gap: 20px;
  text-align: center;
  align-items: center;

`;