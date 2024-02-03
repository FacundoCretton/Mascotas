import React from 'react';
import InteractiveCarousel from '../Hero';

const Slide1 = () => {
  return (
    <img
      className="d-block w-100"
      src="./animales.jpg"
      alt="Slide 1"
    />
  );
}

const Slide2 = () => (
  <InteractiveCarousel  />
);


const Slide3 = () => {
    return (
        <img
        className="d-block w-100"
        src="./animales.jpg"
        alt="Slide 3"
        />
    );
}


export { Slide1, Slide2 , Slide3 };