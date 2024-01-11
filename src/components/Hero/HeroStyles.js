// HeroStyles.js
import styled from 'styled-components';
import { animated } from 'react-spring';

export const CarouselContainer = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 100px;
`;

export const InfoSide = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #f8f8f8;
  display: flex;
  justify-content: flex-start; /* Alineación a la izquierda */
  align-items: center;
`;

export const ImageSide = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  background-color: #282c34;
  position: relative;
`;

export const AnimatedPetImage = styled(animated.img)`
  width: 30%;
  height: auto;
  filter: brightness(30%);
  transition: filter 0.3s ease; /* Agrega una transición para un efecto suave */

  &:hover {
    filter: brightness(100%);
  }

  &.active {
    filter: brightness(100%);
  }
`;


export const PromotionText = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

export const InfoText = styled(animated.div)`
  color: #333;
  max-width: 400px; /* Ajusta según sea necesario */
  text-align: left;
`;

export const CatFoodImage = styled.img`
  width: 40%; /* Ajusta según sea necesario */
  height: 40%;
  margin-right: 10px; /* Espacio a la derecha de la imagen */
`;

export const CatInfoOverlay = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const InfoTitle = styled.h3`
  margin-bottom: 10px;
`;

export const InfoDescription = styled.p`
  line-height: 1.5;
`;

export const AnimatedOverlay = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

export const CarouselSlide = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  background-color: #f8f8f8;
  padding: 20px;
  cursor: pointer; /* Hacer que el contenedor sea clickeable */
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 600px;
`;



// ... (otros estilos)

export const FoodContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const FoodImage = styled.img`
  width: 80px;
  height: 120px;
  margin-bottom: 10px;
  cursor: pointer; /* Hacer que la imagen sea clickeable */
  border: ${(props) => (props.selected ? '2px solid #00f' : 'none')}; /* Estilo de borde si está seleccionado */
`;

