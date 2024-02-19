import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import styled, { keyframes } from "styled-components";
export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const FlechaIzquierda = styled(RiArrowLeftLine)`
  font-size: 24px;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid black;
  background: rgba(255, 255, 255, 0.5);
`;

export const FlechaDerecha = styled(RiArrowRightLine)`
  font-size: 24px;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid black;
  background: rgba(255, 255, 255, 0.5);
`;

export const rotateAnimation = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(180deg);
  }
`;

export const ImgComponent = styled.img`
  max-width: 400px;
  max-height: 400px;
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