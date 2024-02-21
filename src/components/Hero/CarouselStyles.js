import styled from 'styled-components'
import Carousel from 'react-bootstrap/Carousel'



export const StyledCarousel = styled(Carousel)`


    width: 100%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px auto;
    
    .carousel-item {
    height: 450px;
    /* border-radius: 15px; */
    overflow: hidden; 
    position: relative;

    }


  /* &.no-width img {
    width: auto;
  } */


  h3{
    color: #fefefe;
    font-family:"Comfortaa";

  }

  p{
    color: white;
    font-family:"Noto Sans";


  }
`;


export const ImgSlide = styled.img`

  width: 100%;
  height: 100%;

`;

export const CaptionBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.5); /* Color de fondo semitransparente */
  padding: 10px; /* Ajusta el espaciado dentro del fondo */
  border-radius: 5px; /* Añade bordes redondeados para suavizar los bordes */
`;