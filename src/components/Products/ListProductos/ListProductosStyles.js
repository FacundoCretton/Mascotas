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
  justify-content: space-between;
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


