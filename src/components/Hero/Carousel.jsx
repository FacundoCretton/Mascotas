import Carousel from 'react-bootstrap/Carousel';
import { Slide1, Slide2, Slide3 } from './Slides/Slide1';
import { StyledCarousel } from './CarouselStyles';
const Carousell =()=> {
  return (
    <StyledCarousel fade>
      <Carousel.Item>
        <Slide1 text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="no-width">
        <Slide2 text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Slide3 text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </StyledCarousel>
  );
}

export default Carousell;