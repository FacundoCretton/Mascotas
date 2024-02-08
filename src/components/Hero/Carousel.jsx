import Carousel from 'react-bootstrap/Carousel';
import { Slide1, Slide2, Slide3 } from './Slides/Slide1';
import { StyledCarousel } from './CarouselStyles';
const Carousell =()=> {
  return (
    <StyledCarousel fade>
      <Carousel.Item>
        <Slide1 text="First slide" />
        <Carousel.Caption>
          <h3>Primer slide</h3>
          <p>Acá va un texto de prueba.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="no-width">
        <Slide2 text="Second slide" />
        <Carousel.Caption>
          <h3>Segundo slide</h3>
          <p>Acá va un texto de prueba.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Slide3 text="Third slide" />
        <Carousel.Caption>
          <h3>Tercer slide label</h3>
          <p>
          Acá va un texto de prueba.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </StyledCarousel>
  );
}

export default Carousell;