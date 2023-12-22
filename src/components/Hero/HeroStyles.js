// HeroStyles.js
import styled from 'styled-components';
import { animated } from 'react-spring';

export const CarouselContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 100px;
`;

export const CarouselSlide = styled.div`
  display: flex;
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
  width: 40%;
  height: auto;
  filter: brightness(0%);
  &:hover {
    filter: brightness(100%);
  }
  z-index: 1000;
`;

export const CatFoodImage = styled.img`
  width: 40%; /* Ajusta según sea necesario */
  height: 40%;
  margin-right: 20px; /* Espacio a la derecha de la imagen */
`;

export const InfoTitle = styled.h2`
  margin-bottom: 10px;
`;

export const InfoDescription = styled.p`
  line-height: 1.5;
`;

// ... (otros estilos)