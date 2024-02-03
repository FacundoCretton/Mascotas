import styled from 'styled-components'
import Carousel from 'react-bootstrap/Carousel'



export const StyledCarousel = styled(Carousel)`

    max-width: 800px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px auto;
    
    
    .carousel-item {
    height: 400px;
    border-radius: 15px;
    overflow: hidden; 
  }

    img {
   
    height: 100%; 
    object-fit: cover; 
  }
  &.no-width img {
    width: auto;
  }
`;


